import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Pays} from "../../shared/models/pays";
import {PaysService} from "../../shared/services/api/pays/pays.service";

@Component({
  selector: 'app-pays-new',
  templateUrl: './pays-new.component.html',
  styleUrls: ['./pays-new.component.scss']
})
export class PaysNewComponent implements OnInit {

  pays : Pays


  wrongCredential: boolean;
  uniqDest: boolean;


  constructor(
    private paysService: PaysService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  newDest(form: NgForm) {
    this.wrongCredential = false

    this.uniqDest = false
    this.paysService.findPaysByLibelle(this.pays.nom).subscribe(destF => {
      let destinationFind = destF[0]
      if (destinationFind){
        this.uniqDest = true
        document.getElementById('nom').classList.add('is-invalid')
      }else {
        this.paysService.postPays(this.pays).subscribe( resuslt => {
          this.router.navigate(['/pays'])
        },error => {
          this.wrongCredential = true
        })
      }
    })


  }

}
