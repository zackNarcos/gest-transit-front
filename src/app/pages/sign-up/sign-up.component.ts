import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Router} from "@angular/router";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user : User = new User()


  wrongCredential: boolean;
  uniqMail: boolean;


  constructor(
    private userService: ApiUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
        this.userService.postUser(this.user).subscribe( resuslt => {
          this.router.navigate(['/utilisateurs'])
        },error => {
          this.wrongCredential = true
        })
      }
    })


  }
}
