import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {Colis} from "../../shared/models/colis";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import domtoimage from 'dom-to-image';

import jsPDF from 'jspdf';
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";
import {Reliquat} from "../../shared/models/reliquat";
import {ReliquatService} from "../../shared/services/api/reliquat/reliquat.service";
import {ProfileService} from "../../shared/services/profile/profile.service";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-colis-detail',
  templateUrl: './colis-detail.component.html',
  styleUrls: ['./colis-detail.component.scss']
})
export class ColisDetailComponent implements OnInit {

  destinations : Destinations[]
  destination : Destinations = new Destinations()
  colis : Colis = new Colis()
  reliquat: Reliquat


  wrongCredential: boolean;
  uniqDest: boolean;


  constructor(
    private destinationsService: DestinationsService,
    private reliquatService: ReliquatService,
    private colisService: ColisService,
    private route: ActivatedRoute,
    private toastrS: ToastrService,
    private profilService:ProfileService,
    private userService:ApiUserService,
  ) { }

  user:User

  toastr = this.toastrS
  private id = this.route.snapshot.params['id']
  private date

  ngOnInit(): void {
    this.destinationsService.getDestinations().subscribe( result => {
      this.destinations = result
    })
    this.colisService.getColi(this.id).subscribe(coli => {
      this.colis = coli
      this.destinationsService.getDestinationByURI(this.colis.destination).subscribe(dest => {
        this.destination.libelle = dest.libelle
      })
    })
    this.profilService.getMe().subscribe(user => this.user = user)
  }

  @ViewChild('recuColi')
  recuColi!: ElementRef;

  public downloadAsPDF(numero: string, toastr: ToastrService) {
    let div = this.recuColi.nativeElement;

    var img:any;
    var filename;
    var newImage:any;


    domtoimage.toPng(div, { bgcolor: '#fff' })

      .then(function(dataUrl) {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function(){

          var pdfWidth = img.width;
          var pdfHeight = img.height;

          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

          var doc;

          if(pdfWidth > pdfHeight)
          {
            doc = new jsPDF('l', 'mm', [pdfWidth , pdfHeight]);
          }
          else
          {
            doc = new jsPDF('p', 'mm', [pdfWidth , pdfHeight]);
          }


          var width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG',  10, 10, width, height);
          filename = numero + '.pdf';
          doc.save(filename);

          toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> <b>Reçu</b> téléchargé avec succès.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: 'toast-top-right'
          });
        };


      })
      .catch(function(error) {

        // Error Handling

      });

  }

  getReliquat(form: NgForm) {
    this.wrongCredential = false

    this.reliquat = new Reliquat()
    this.reliquat.montant = this.colis.reste
    this.reliquat.date = new Date()
    this.reliquat.coli = '/api/colis/'+this.colis.id
    this.reliquat.employe = '/api/users/'+this.user.id

    this.reliquatService.postReliquat(this.reliquat).subscribe( reliq => {
      this.colis.isSolde = true
      this.colis.reste = 0

      this.colisService.putColis(this.colis).subscribe(coli => {
        this.colisService.getColi(this.id).subscribe(coli => {
          this.colis = coli
          this.destinationsService.getDestinationByURI(this.colis.destination).subscribe(dest => {
            this.destination.libelle = dest.libelle
          })
        })
      })
    })
  }

  undoReliquat() {
    this.wrongCredential = false

    this.reliquatService.findReliquatByIdColi(this.colis.id).subscribe(reliqF => {
      let reliquatFind = reliqF[0]
      if (reliquatFind){
        this.reliquat = reliquatFind
        this.reliquatService.deleteReliquat(this.reliquat).subscribe( reliq => {
          if (this.colis.prixTotal - this.colis.avance == 0){
            this.colis.isSolde = true
            this.colis.reste = 0
          }else {
            this.colis.isSolde = false
            this.colis.reste = this.colis.prixTotal - this.colis.avance
          }

          this.colisService.putColis(this.colis).subscribe(coli => {
            this.colisService.getColi(this.id).subscribe(coli => {
              this.colis = coli
              this.destinationsService.getDestinationByURI(this.colis.destination).subscribe(dest => {
                this.destination.libelle = dest.libelle
              })
            })
          })

        })
      }
    })
  }
}
