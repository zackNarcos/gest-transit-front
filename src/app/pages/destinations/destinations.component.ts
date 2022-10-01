import { Component, OnInit } from '@angular/core';
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Router} from "@angular/router";
import {Destinations} from "../../shared/models/destinations";

@Component({
  selector: 'app-destinationss',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  constructor(
    private destinationsService:DestinationsService,
    private router: Router
  ) { }

  destinations:Destinations[]=[]
  getDestinations(){
    this.destinationsService.getDestinations().subscribe(res => {
      this.destinations = res
    })
  }

  ngOnInit(): void {
    this.getDestinations()
  }

  lockUser(id: number, b: boolean, $event: MouseEvent) {
    let destination: Destinations = new Destinations()
    destination.id = id
    destination.isArchivate = b
    this.destinationsService.deleteDestinationr(destination).subscribe( resuslt => {
      this.getDestinations()
    },error => {

    })
  }
}
