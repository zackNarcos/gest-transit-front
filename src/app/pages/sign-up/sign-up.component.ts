import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Router} from "@angular/router";
import {any} from "codelyzer/util/function";
import {Destinations} from "../../shared/models/destinations";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {ProfileService} from "../../shared/services/profile/profile.service";
import {PaysService} from "../../shared/services/api/pays/pays.service";
import {Pays} from "../../shared/models/pays";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user : User = new User()
  pays : Pays[]

  wrongCredential: boolean;
  uniqMail: boolean;


  constructor(
    private paysService: PaysService,
    private profilService: ProfileService,
    private userService: ApiUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paysService.getPayss().subscribe( result => {
      this.pays = result
      this.user.pays = "/api/pays/"+result[0].id
    })
    this.user.password = "keasexpress"
    this.user.isLocked = false
    this.user.roles = ["ROLE_EMPLOYE"]
  }

  signUp(form: NgForm) {
    this.wrongCredential = false
    this.uniqMail = false

    this.userService.findByEmail(this.user.email).subscribe(userF => {
      let userFind = userF[0]
      console.log(userFind)
      if (userFind){
        this.uniqMail = true
        document.getElementById('email').classList.add('is-invalid')
      }else {
        this.profilService.getPasswordHash(this.user.password).subscribe(pass => {
          this.user.password = pass
          this.userService.postUser(this.user).subscribe( resuslt => {
            this.router.navigate(['/utilisateurs'])
          },error => {
            this.wrongCredential = true
          })
        })
      }
    })


  }
}
