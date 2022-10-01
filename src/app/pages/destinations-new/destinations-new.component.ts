import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Destinations} from "../../shared/models/destinations";
import {Pays} from "../../shared/models/pays";
import {PaysService} from "../../shared/services/api/pays/pays.service";

@Component({
  selector: 'app-destinationss-ne',
  templateUrl: './destinations-new.component.html',
  styleUrls: ['./destinations-new.component.scss']
})
export class DestinationsNewComponent implements OnInit {

  destination : Destinations = new Destinations()


  wrongCredential: boolean;
  uniqDest: boolean;

  pays : Pays[]

  constructor(
    private paysService: PaysService,
    private destinationsService: DestinationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paysService.getPayss().subscribe( result => {
      this.pays = result
      this.destination.pays = "/api/pays/"+result[0].id
    })
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
          this.router.navigate(['/destinations'])
        },error => {
          this.wrongCredential = true
        })
      }
    })


  }

}
