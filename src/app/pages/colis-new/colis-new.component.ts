import { Component, OnInit } from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Colis} from "../../shared/models/colis";
import {DestinationsService} from "../../core/services/destinations.service";
import {ColisService} from "../../core/services/colis.service";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-colis-new',
  templateUrl: './colis-new.component.html',
  styleUrls: ['./colis-new.component.scss']
})
export class ColisNewComponent implements OnInit {

  destinations$ = this.moduleStoreService.selectDestinations()
  colis : Colis = new Colis()


  wrongCredential: boolean;
  user: any

  colisForm = new FormGroup({
    nomExpediteur: new FormControl('', Validators.required),
    prenomExpediteur: new FormControl('', Validators.required),
    telephoneExpediteur: new FormControl('', Validators.required),
    npiExpediteur: new FormControl('', Validators.required),
    emailExpediteur: new FormControl('', Validators.required),
    nomBeneficiaire: new FormControl('', Validators.required),
    prenomBeneficiaire: new FormControl('', Validators.required),
    telephoneBeneficiaire: new FormControl('', Validators.required),
    emballage: new FormControl(0, Validators.required),
    contenue: new FormControl('', Validators.required),
    valeur: new FormControl(0, Validators.required),
    avance: new FormControl(0, Validators.required),
    poids: new FormControl(0, Validators.required),
    destination: new FormControl(null, Validators.required),
    prixKilo: new FormControl(0, Validators.required),
    douane: new FormControl(0, Validators.required),
  });

  constructor(
    private moduleStoreService: ModuleStoreService,
    private router: Router
  ) {
    this.moduleStoreService.getUser().subscribe(user => {
      this.user = user
    })
  }


  ngOnInit(): void {
    this.colis.status = 'ATTENTE_EXPEDITION'
    this.colis.emballage = 0
    this.colis.poids = 1
    this.colis.prixKilo = 0
    this.colis.douane = 0
    this.colis.avance = 0
    this.colis.reste = 0
    this.colis.prixTotal = 0

    this.colisForm.get('destination').valueChanges.subscribe( value => {
      if (value == null) return
      console.log("value", value)
      this.colis.destination = value
      this.colis.douane = value.prixDouane
      this.colis.prixKilo = value.prixKilos
      this.colis.paysDestination = value.pays
      //set the price per kilo to the form*
      this.colisForm.get('prixKilo').setValue(value.prixKilos)
      this.colisForm.get('douane').setValue(value.prixDouane)

    })

    this.colisForm.get('poids').valueChanges.subscribe( value => {
      this.colis.poids = value
    })

    this.colisForm.get('emballage').valueChanges.subscribe( value => {
      this.colis.emballage = value
    })

    this.colisForm.get('douane').valueChanges.subscribe( value => {
      this.colis.douane = value
    })

    this.colisForm.get('prixKilo').valueChanges.subscribe( value => {
      this.colis.prixKilo = value
    })
  }

  updateInfos($event: Event) {
    console.log("event value", $event.target)
    // this.colisForm.get('prixKilo').setValue(this.colis.destination.prixKilos)
  }
  newColi() {
    this.colis.nomExpediteur = this.colisForm.get('nomExpediteur').value
    this.colis.prenomExpediteur = this.colisForm.get('prenomExpediteur').value
    this.colis.telephoneExpediteur = this.colisForm.get('telephoneExpediteur').value
    this.colis.npiExpediteur = this.colisForm.get('npiExpediteur').value
    this.colis.emailExpediteur = this.colisForm.get('emailExpediteur').value
    this.colis.nomBeneficiaire = this.colisForm.get('nomBeneficiaire').value
    this.colis.prenomBeneficiaire = this.colisForm.get('prenomBeneficiaire').value
    this.colis.telephoneBeneficiaire = this.colisForm.get('telephoneBeneficiaire').value
    this.colis.poids = this.colisForm.get('poids').value
    this.colis.emballage = this.colisForm.get('emballage').value
    this.colis.douane = this.colisForm.get('douane').value
    this.colis.contenue = this.colisForm.get('contenue').value
    this.colis.valeur = this.colisForm.get('valeur').value
    this.colis.avance = this.colisForm.get('avance').value
    this.colis.prixKilo = this.colisForm.get('prixKilo').value
    this.colis.destination = this.colisForm.get('destination').value
    this.colis.employe = this.user
    this.colis.prixTotal = (this.colis.prixKilo*this.colis.poids)+this.colis.douane+this.colis.emballage
    this.colis.dateDepot = new Date()
    let date = new Date()
    this.colis.numero = "KE"+ this.colis.paysDestination.nom.slice(0,2) + date.getFullYear() + (date.getMonth()+1) + date.getDate() + date.getMinutes() + date.getSeconds() + date.getMilliseconds()

    this.wrongCredential = false

    if (this.colis.prixTotal - this.colis.avance == 0){
      this.colis.isSolde = true
      this.colis.reste = 0
    }else {
      this.colis.isSolde = false
      this.colis.reste = this.colis.prixTotal - this.colis.avance
    }

    this.moduleStoreService.addColis(this.colis)
    this.router.navigate(['/me/colis'])
  }
}
