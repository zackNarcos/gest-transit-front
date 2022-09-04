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

  ngOnInit(): void {
    this.destinationsService.getDestinations().subscribe(res => {
      this.destinations = res
    })
  }

  lockUser(id: number, b: boolean, $event: MouseEvent) {
    let destination: Destinations = new Destinations()
    destination.id = id
    destination.isArchivate = b
    this.destinationsService.putDestinationr(destination).subscribe( resuslt => {
      this.router.navigate(['/destinations/'+id])
    },error => {

    })
  }
}
