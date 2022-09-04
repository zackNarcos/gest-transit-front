import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-destinationss-detail',
  templateUrl: './destinations-detail.component.html',
  styleUrls: ['./destinations-detail.component.scss']
})
export class DestinationsDetailComponent implements OnInit {

  destination : Destinations = new Destinations()


  wrongCredential: boolean;
  uniqDest: boolean;

  constructor(
    private destinationsService: DestinationsService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  private id = this.route.snapshot.params['id']


  ngOnInit(): void {
    this.destinationsService.getDestination(this.id).subscribe(dest => this.destination = dest)
  }

  upDest(form: NgForm) {
    this.wrongCredential = false

    this.destinationsService.putDestinationr(this.destination).subscribe( resuslt => {
      this.router.navigate(['/destinations'])
    },error => {
      this.wrongCredential = true
    })
  }

}
