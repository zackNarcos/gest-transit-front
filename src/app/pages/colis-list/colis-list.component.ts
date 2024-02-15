import { Component, OnInit } from '@angular/core';
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import {Colis} from "../../shared/models/colis";
import {ProfileService} from "../../shared/services/profile/profile.service";

@Component({
  selector: 'app-colis-list',
  templateUrl: './colis-list.component.html',
  styleUrls: ['./colis-list.component.scss']
})
export class ColisListComponent implements OnInit {
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
      this.colisService.getColisIn(this.user._id, this.year, this.month).subscribe(res => {
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
        this.colisService.getColisIn(this.user._id, this.year, this.month).subscribe(res => {
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
      this.colisService.getColisIn(this.user._id, this.year, this.month).subscribe(res => {
        this.colis = res
      })
    })
  }


}
