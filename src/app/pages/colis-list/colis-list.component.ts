import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {Colis} from "../../shared/models/colis";
import {ColisService} from "../../core/services/colis.service";

@Component({
  selector: 'app-colis-list',
  templateUrl: './colis-list.component.html',
  styleUrls: ['./colis-list.component.scss']
})
export class ColisListComponent implements OnInit {
  month = new Date().getMonth()+1;
  year = new Date().getFullYear();

  constructor(
    private colisService:ColisService,
  ) { }


  colis:Colis[]=[]
  user:User

  ngOnInit(): void {
    // this.profilService.getMe().subscribe(user => {
    //   this.user = user
    //   this.month = new Date().getMonth()+1;
    //   this.year = new Date().getFullYear();
    //   this.colisService.getColisIn(this.user._id, this.year, this.month).subscribe(res => {
    //     this.colis = res
    //   })
    // })

  }

  upColis(id: number, status: string) {
    let coli: Colis = new Colis()
    coli.status = status
    coli._id = id
    // this.colisService.putColis(coli).subscribe( resuslt => {
    //   this.profilService.getMe().subscribe(user => {
    //     this.user = user
    //     this.colisService.getColisIn(this.user._id, this.year, this.month).subscribe(res => {
    //       this.colis = res
    //     })
    //   })
    // },error => {
    //
    // })
  }

  reloadData() {
    this.colis = []
    // this.profilService.getMe().subscribe(user => {
    //   this.user = user
    //   this.colisService.getColisIn(this.user._id, this.year, this.month).subscribe(res => {
    //     this.colis = res
    //   })
    // })
  }


}
