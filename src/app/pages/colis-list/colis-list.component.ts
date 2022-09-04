import { Component, OnInit } from '@angular/core';
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import {Colis} from "../../shared/models/colis";

@Component({
  selector: 'app-colis-list',
  templateUrl: './colis-list.component.html',
  styleUrls: ['./colis-list.component.scss']
})
export class ColisListComponent implements OnInit {

  constructor(
    private colisService:ColisService,
    private router: Router
  ) { }

  colis:Colis[]=[]

  ngOnInit(): void {
    this.colisService.getColis().subscribe(res => {
      this.colis = res
    })
  }

  upColis(id: number, status: string) {
    let coli: Colis = new Colis()
    coli.status = status
    coli.id = id
    this.colisService.putColis(coli).subscribe( resuslt => {
      this.router.navigate(['/colis/'+id])
    },error => {

    })
  }

}
