import { Component, OnInit } from '@angular/core';
// import {Destinations} from "../../shared/models/destinations";
// import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Pays} from "../../shared/models/pays";
import {ModuleStoreService} from "../../core/store/module-store.service";
// import {PaysService} from "../../shared/services/api/pays/pays.service";

@Component({
  selector: 'app-pays-new',
  templateUrl: './pays-new.component.html',
  styleUrls: ['./pays-new.component.scss']
})
export class PaysNewComponent{

  pays : Pays = {
    nom: ''
  }

  wrongCredential: boolean;
  uniqDest: boolean;


  constructor(
    private moduleStoreService: ModuleStoreService,
    private router: Router
  ) {
  }


  newDest(form: NgForm) {
    this.wrongCredential = false

    this.uniqDest = false
    this.moduleStoreService.selectPays().subscribe(dests => {
      dests.forEach(dest => {
        if (dest.nom == this.pays.nom) {
          this.uniqDest = true
        }
      })

      if (this.uniqDest) {
        document.getElementById('nom').classList.add('is-invalid')
      } else {
        this.moduleStoreService.addPays(this.pays)
        this.router.navigate(['/pays'])
      }
    })


  }

}
