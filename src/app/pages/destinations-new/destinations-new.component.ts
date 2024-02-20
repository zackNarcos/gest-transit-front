import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Destinations} from "../../shared/models/destinations";
import {ModuleStoreService} from "../../core/store/module-store.service";
import {map} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-destinationss-ne',
  templateUrl: './destinations-new.component.html',
  styleUrls: ['./destinations-new.component.scss']
})
export class DestinationsNewComponent {

  destination : Destinations = new Destinations()

  wrongCredential: boolean;
  uniqDest: boolean;

  pays$ = this.moduleStoreService.selectPays()
  pays = "0"
  listePays = []

  constructor(
    private moduleStoreService: ModuleStoreService,
    private router: Router
  ) {
    this.destination.isArchivate = false

    let cpt = 0
    this.pays$.pipe(
      take(1)
    ).subscribe(pays => {
      cpt += 1
      if (pays.length > 0){
        this.pays = pays[0]._id
      }
      this.listePays = pays
    })
  }

  newDest(form: NgForm) {
    this.wrongCredential = false

    if (form.invalid) {
      return
    }

    let cpt = 0

    this.moduleStoreService.selectDestinations().pipe(
      take(1)
    )
      .subscribe(dests => {
      let destinationFind = dests.find(dest => dest.libelle === this.destination.libelle)
      if (destinationFind){
        this.uniqDest = true
        document.getElementById('libelle').classList.add('is-invalid')
      } else {
          this.listePays.forEach(pay => {
            console.log("pay eee", this.pays)
            console.log("pay ", pay._id, this.pays)
            if (pay._id === this.pays){
              console.log("pay", pay)
              this.destination.pays = pay
              this.moduleStoreService.addDestination(this.destination)
              this.moduleStoreService.loadDestinations()
              this.router.navigate(['/destinations'])
            }
          })
      }
    })
  }
}
