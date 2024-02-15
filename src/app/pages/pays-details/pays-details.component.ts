import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Pays} from "../../shared/models/pays";
import {PaysService} from "../../shared/services/api/pays/pays.service";

@Component({
  selector: 'app-pays-details',
  templateUrl: './pays-details.component.html',
  styleUrls: ['./pays-details.component.scss']
})
export class PaysDetailsComponent implements OnInit {

  pays : Pays


  wrongCredential: boolean;
  uniqDest: boolean;

  constructor(
    private paysService: PaysService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  private id = this.route.snapshot.params['id']


  ngOnInit(): void {
    this.paysService.getPays(this.id).subscribe(dest => this.pays = dest)
  }

  upDest(form: NgForm) {
    this.wrongCredential = false



    this.uniqDest = false

    this.paysService.findPaysByLibelle(this.pays.nom).subscribe(destF => {
      let destinationFind = destF[0]
      if (destinationFind){
        this.uniqDest = true
        document.getElementById('nom').classList.add('is-invalid')
      }else {
        this.paysService.putPays(this.pays).subscribe( resuslt => {
          this.router.navigate(['/pays'])
        },error => {
          this.wrongCredential = true
        })
      }
    })
  }

}
