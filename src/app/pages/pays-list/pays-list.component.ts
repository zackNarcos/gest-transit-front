import { Component, OnInit } from '@angular/core';
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Router} from "@angular/router";
import {Destinations} from "../../shared/models/destinations";
import {PaysService} from "../../shared/services/api/pays/pays.service";
import {Pays} from "../../shared/models/pays";

@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss']
})
export class PaysListComponent implements OnInit {

  constructor(
    private paysService:PaysService,
    private router: Router
  ) { }

  pays:Pays[]=[]
  getDestinations(){
    this.paysService.getPayss().subscribe(res => {
      this.pays = res
    })
  }

  ngOnInit(): void {
    this.getDestinations()
  }

}
