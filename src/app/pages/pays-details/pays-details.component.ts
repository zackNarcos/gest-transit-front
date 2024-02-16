import { Component, OnInit } from '@angular/core';
// import {Destinations} from "../../shared/models/destinations";
// import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Pays} from "../../shared/models/pays";
import {ModuleStoreService} from "../../core/store/module-store.service";
// import {PaysService} from "../../shared/services/api/pays/pays.service";

@Component({
  selector: 'app-pays-details',
  templateUrl: './pays-details.component.html',
  styleUrls: ['./pays-details.component.scss']
})
export class PaysDetailsComponent{

  pays : Pays = { nom: '', _id: ''}


  wrongCredential: boolean;
  uniqDest: boolean;
  id = this.route.snapshot.params['id']

  constructor(
    private moduleStoreService: ModuleStoreService,
    private router: Router,
    private route:ActivatedRoute,
  ) {
    let trouve= false
    this.moduleStoreService.selectPays().subscribe(pays => {
      pays.forEach(pay => {
        if (pay._id == this.id) {
          this.pays = pay
          trouve = true
        }
      })
    })
    if (!trouve) {
      this.router.navigate(['/pays'])
    }
  }


  upDest(form: NgForm) {
    this.wrongCredential = false
    this.uniqDest = false

    this.moduleStoreService.selectPays().subscribe(pays => {
      pays.forEach(pay => {
        if (pay.nom == this.pays.nom && pay._id != this.pays._id) {
          this.uniqDest = true
        }
      })

      if (this.uniqDest) {
        document.getElementById('nom').classList.add('is-invalid')
      } else {
        this.moduleStoreService.updatePays(this.pays)
        this.router.navigate(['/pays'])
      }
    })
  }

}
