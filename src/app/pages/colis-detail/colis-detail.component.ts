import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {Colis} from "../../shared/models/colis";
import {ActivatedRoute} from "@angular/router";
import domtoimage from 'dom-to-image';

import jsPDF from 'jspdf';
import {NgForm} from "@angular/forms";
import {Reliquat} from "../../shared/models/reliquat";
import {User} from "../../shared/models/user";
import {DestinationsService} from "../../core/services/destinations.service";
import {ReliquatService} from "../../core/services/reliquat.service";
import {ColisService} from "../../core/services/colis.service";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-colis-detail',
  templateUrl: './colis-detail.component.html',
  styleUrls: ['./colis-detail.component.scss']
})
export class ColisDetailComponent implements OnInit {

  colis : Colis = new Colis()
  reliquat: Reliquat


  wrongCredential: boolean;


  constructor(
    private moduleStoreService: ModuleStoreService,
    private route: ActivatedRoute,
    private colisService: ColisService,
  ) {

    const id = this.route.snapshot.params['id']

    this.colisService.getColisById(id).subscribe(coli => {
      this.colis = coli
      this.moduleStoreService.setSelectedColis(coli)
    })
  }

  user:User

  // toastr = this.toastrS

  ngOnInit(): void {

    this.moduleStoreService.selectSelectedColis().subscribe(coli => {
      this.colis = coli
    })
  }

  @ViewChild('recuColi')
  recuColi!: ElementRef;

  public downloadAsPDF(numero: string) {
    let div = this.recuColi.nativeElement;

    let img:any;
    let filename = numero + '.pdf';
    let newImage:any;


    domtoimage.toPng(div, { bgcolor: '#fff' })

      .then(function(dataUrl) {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function(){

          let pdfWidth = img.width;
          let pdfHeight = img.height;

          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

          let doc: any;

          if(pdfWidth > pdfHeight) {
            doc = new jsPDF('l', 'mm', [pdfWidth , pdfHeight]);
          } else {
            doc = new jsPDF('p', 'mm', [pdfWidth , pdfHeight]);
          }


          let width = doc.internal.pageSize.getWidth();
          let height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG',  10, 10, width, height);
          filename = numero + '.pdf';
          doc.save(filename);

          // toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> <b>Reçu</b> téléchargé avec succès.', '', {
          //   timeOut: 8000,
          //   closeButton: true,
          //   enableHtml: true,
          //   toastClass: "alert alert-info alert-with-icon",
          //   positionClass: 'toast-top-right'
          // });
        };


      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getReliquat(form: NgForm) {
    this.wrongCredential = false

    this.reliquat = new Reliquat()
    this.reliquat.montant = this.colis.reste
    // this.reliquat.date = new Date()
    // this.reliquat.coli = '/colis/'+this.colis.id
    // this.reliquat.employe = '/users/'+this.user.id
    //
    // this.reliquatService.postReliquat(this.reliquat).subscribe( reliq => {
    //   this.colis.isSolde = true
    //   this.colis.reste = 0
    //
    //   this.colisService.putColis(this.colis).subscribe(coli => {
    //     this.colisService.getColi(this.id).subscribe(coli => {
    //       this.colis = coli
    //       this.destinationsService.getDestinationByURI(this.colis.destination).subscribe(dest => {
    //         this.destination.libelle = dest.libelle
    //       })
    //     })
    //   })
    // })
  }

  undoReliquat() {
    this.wrongCredential = false

    // this.reliquatService.findReliquatByIdColi(this.colis.id).subscribe(reliqF => {
    //   let reliquatFind = reliqF[0]
    //   if (reliquatFind){
    //     this.reliquat = reliquatFind
    //     this.reliquatService.deleteReliquat(this.reliquat).subscribe( reliq => {
    //       if (this.colis.prixTotal - this.colis.avance == 0){
    //         this.colis.isSolde = true
    //         this.colis.reste = 0
    //       }else {
    //         this.colis.isSolde = false
    //         this.colis.reste = this.colis.prixTotal - this.colis.avance
    //       }
    //
    //       this.colisService.putColis(this.colis).subscribe(coli => {
    //         this.colisService.getColi(this.id).subscribe(coli => {
    //           this.colis = coli
    //           this.destinationsService.getDestinationByURI(this.colis.destination).subscribe(dest => {
    //             this.destination.libelle = dest.libelle
    //           })
    //         })
    //       })
    //
    //     })
    //   }
    // })
  }
}
