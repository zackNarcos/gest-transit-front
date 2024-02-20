import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Pays} from "../../shared/models/pays";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-destinationss-detail',
  templateUrl: './destinations-detail.component.html',
  styleUrls: ['./destinations-detail.component.scss']
})
export class DestinationsDetailComponent {

  destination : Destinations = new Destinations()
  id = this.route.snapshot.params['id']

  wrongCredential: boolean;
  uniqDest: boolean;
  pays$ = this.moduleStoreService.selectPays()

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private moduleStoreService: ModuleStoreService,
  ) {
    let trouve= false
    this.moduleStoreService.selectDestinations().subscribe(dests => {
      dests.forEach(dest => {
        if (dest._id == this.id) {
          this.destination = dest
          trouve = true
        }
      })
    })
    if (!trouve) {
      this.router.navigate(['/destinations'])
    }
  }


  upDest(form: NgForm) {
    this.wrongCredential = false

    this.moduleStoreService.selectDestinations().subscribe(dests => {
      dests.forEach(dest => {
        if (dest.libelle == this.destination.libelle && dest._id != this.destination._id) {
          this.uniqDest = true
        }
      })

      if (this.uniqDest) {
        document.getElementById('nom').classList.add('is-invalid')
      } else {
        this.moduleStoreService.updateDestination(this.destination)
        this.router.navigate(['/destinations'])
      }
    })
  }

}
