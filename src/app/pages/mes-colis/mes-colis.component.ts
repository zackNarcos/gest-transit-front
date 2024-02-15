import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../shared/services/profile/profile.service";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import {Router} from "@angular/router";
import {Colis} from "../../shared/models/colis";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-mes-colis',
  templateUrl: './mes-colis.component.html',
  styleUrls: ['./mes-colis.component.scss']
})
export class MesColisComponent implements OnInit {

  month = new Date().getMonth()+1;
  year = new Date().getFullYear();
  day = new Date().getDate();

  constructor(
    private profilService:ProfileService,
    private userService:ApiUserService,
    private colisService:ColisService,
    private router: Router
  ) { }


  colis:Colis[]=[]
  user:User

  ngOnInit(): void {
    this.profilService.getMe().subscribe(user => {
      this.user = user
      this.month = new Date().getMonth()+1;
      this.year = new Date().getFullYear();
      this.colisService.getColisByUser(this.user._id, this.year, this.month, this.day).subscribe(res => {
        this.colis = res
      })
    })

  }

  upColis(id: number, status: string) {
    let coli: Colis = new Colis()
    coli.status = status
    coli.id = id
    this.colisService.putColis(coli).subscribe( resuslt => {
      this.profilService.getMe().subscribe(user => {
        this.user = user
        this.colisService.getColisByUser(this.user._id, this.year, this.month, this.day).subscribe(res => {
          this.colis = res
        })
      })
    },error => {

    })
  }

  reloadData() {
    this.colis = []
    this.profilService.getMe().subscribe(user => {
      this.user = user
      this.colisService.getColisByUser(this.user._id, this.year, this.month, this.day).subscribe(res => {
        this.colis = res
      })
    })
  }

}
