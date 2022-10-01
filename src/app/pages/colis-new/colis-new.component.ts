import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Colis} from "../../shared/models/colis";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import {ProfileService} from "../../shared/services/profile/profile.service";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-colis-new',
  templateUrl: './colis-new.component.html',
  styleUrls: ['./colis-new.component.scss']
})
export class ColisNewComponent implements OnInit {

  destinations : Destinations[]
  colis : Colis = new Colis()


  wrongCredential: boolean;
  uniqDest: boolean;


  constructor(
    private destinationsService: DestinationsService,
    private router: Router,
    private colisService: ColisService,
    private profilService:ProfileService,
    private userService:ApiUserService,
  ) { }

  user= new User

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
      this.colis.destination = "/api/destinations/"+result[0].id
      this.colis.prixKilo = result[0].prixKilos
      this.colis.douane = result[0].prixDouane
      this.colis.paysDestination = result[0].pays
    })
  }

  newColi(form: NgForm) {
    this.profilService.getMe().subscribe(user => {
      this.user = user
      this.colis.employe = '/api/users/'+this.user.id
    })

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

    this.colisService.findColisByCode(this.colis.numero).subscribe(colF => {
      let coliFind = colF[0]
      if (coliFind){
        this.router.navigate(['/nouveau-coli'])
      }else {
        this.colisService.postColi(this.colis).subscribe( resuslt => {
          this.router.navigate(['/colis'])
        },error => {
          this.wrongCredential = true
        })
      }
    })
  }


  changeDestination() {
    this.destinationsService.getDestinationByURI(this.colis.destination).subscribe( result => {
      this.colis.prixKilo = result.prixKilos
      this.colis.paysDestination = result.pays
      this.colis.douane = result.prixDouane
    },error => {
      this.wrongCredential = true
    })


  }
}
