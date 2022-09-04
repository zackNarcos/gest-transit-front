import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Destinations} from "../../shared/models/destinations";

@Component({
  selector: 'app-destinationss-ne',
  templateUrl: './destinations-new.component.html',
  styleUrls: ['./destinations-new.component.scss']
})
export class DestinationsNewComponent implements OnInit {

  destination : Destinations = new Destinations()


  wrongCredential: boolean;
  uniqDest: boolean;


  constructor(
    private destinationsService: DestinationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.destination.isArchivate = false
  }

  newDest(form: NgForm) {
    this.wrongCredential = false

    this.destinationsService.findDestinationByLibelle(this.destination.libelle).subscribe(destF => {
      let destinationFind = destF[0]
      if (destinationFind){
        this.uniqDest = true
        document.getElementById('libelle').classList.add('is-invalid')
      }else {
        this.destinationsService.postDestination(this.destination).subscribe( resuslt => {
          this.router.navigate(['/destinationss'])
        },error => {
          this.wrongCredential = true
        })
      }
    })


  }

}
