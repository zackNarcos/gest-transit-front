import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../shared/services/profile/profile.service";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import {Router} from "@angular/router";
import {Colis} from "../../shared/models/colis";
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-find-coli',
  templateUrl: './find-coli.component.html',
  styleUrls: ['./find-coli.component.scss']
})
export class FindColiComponent implements OnInit {

  nameToFinnd: string = ''
  numberToFinnd: string = ''

  constructor(
    private profilService:ProfileService,
    private userService:ApiUserService,
    private colisService:ColisService,
    private router: Router
  ) { }


  colis:Colis[]
  user:User = new User()

  ngOnInit(): void {
    this.colis = []
  }

  upColis(id: number, status: string, form: NgForm) {
    let coli: Colis = new Colis()
    coli.status = status
    coli.id = id
    this.colisService.putColis(coli).subscribe( resuslt => {
      this.colisService.findColisByExpediteurName(form.value.nameToFinnd, form.value.numberToFinnd).subscribe(res => {
        this.colis = res
      })
    },error => {

    })
  }

  reloadData(form: NgForm) {
    this.colis = []
    this.colisService.findColisByExpediteurName(form.value.nameToFinnd, form.value.numberToFinnd).subscribe(res => {
      this.colis = res
    })
  }

}
