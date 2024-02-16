import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Colis} from "../../shared/models/colis";
import {DestinationsService} from "../../core/services/destinations.service";
import {ColisService} from "../../core/services/colis.service";

@Component({
  selector: 'app-colis-new',
  templateUrl: './colis-new.component.html',
  styleUrls: ['./colis-new.component.scss']
})
export class ColisNewComponent implements OnInit {

  destinations : Destinations[]
  colis : Colis = new Colis()


  wrongCredential: boolean;


  constructor(
    private destinationsService: DestinationsService,
    // private router: Router,
    // private colisService: ColisService,
  ) { }

  user: any

  ngOnInit(): void {
    this.colis.status = 'ATTENTE_EXPEDITION'
    this.colis.emballage = 0
    this.colis.poids = 1
    this.colis.prixKilo = 0
    this.colis.douane = 0
    this.colis.avance = 0
    this.colis.prixTotal = 0
    this.destinationsService.getDestinations().subscribe( result => {
      this.destinations = result
      this.colis.destination = "/api/destinations/"+result[0]._id
      this.colis.prixKilo = result[0].prixKilos
      this.colis.douane = result[0].prixDouane
      this.colis.paysDestination = result[0].pays
    })
  }

  newColi(form: NgForm) {
    // this.profilService.getMe().subscribe(user => {
    //   this.user = user
    //   this.colis.employe = '/api/users/'+this.user._id
    // })

    this.wrongCredential = false
    this.colis.prixTotal = (this.colis.prixKilo*this.colis.poids)+this.colis.douane+this.colis.emballage
    let date = new Date()
    this.colis.numero = "KE"+date.getFullYear()+(date.getMonth()+1)+date.getDate()+date.getMinutes()+date.getSeconds()+date.getMilliseconds()
    this.colis.dateDepot = new Date()

    if (this.colis.prixTotal - this.colis.avance == 0){
      this.colis.isSolde = true
      this.colis.reste = 0
    }else {
      this.colis.isSolde = false
      this.colis.reste = this.colis.prixTotal - this.colis.avance
    }

    // this.colisService.findColisByCode(this.colis.numero).subscribe(colF => {
    //   let coliFind = colF[0]
    //   if (coliFind){
    //     this.router.navigate(['/nouveau-coli'])
    //   }else {
    //     this.colisService.postColi(this.colis).subscribe( resuslt => {
    //       this.router.navigate(['/colis'])
    //     },error => {
    //       this.wrongCredential = true
    //     })
    //   }
    // })
  }


  changeDestination() {
    // this.destinationsService.getDestinationByURI(this.colis.destination).subscribe( result => {
    //   this.colis.prixKilo = result.prixKilos
    //   this.colis.paysDestination = result.pays
    //   this.colis.douane = result.prixDouane
    // },error => {
    //   this.wrongCredential = true
    // })
  }
}
