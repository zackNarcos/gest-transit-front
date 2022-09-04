import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Destinations} from "../../shared/models/destinations";
import {Colis} from "../../shared/models/colis";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ColisService} from "../../shared/services/api/colis/colis.service";
import domtoimage from 'dom-to-image';

import jsPDF from 'jspdf';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-colis-detail',
  templateUrl: './colis-detail.component.html',
  styleUrls: ['./colis-detail.component.scss']
})
export class ColisDetailComponent implements OnInit {

  destinations : Destinations[]
  destination : Destinations = new Destinations()
  colis : Colis = new Colis()


  wrongCredential: boolean;
  uniqDest: boolean;


  constructor(
    private destinationsService: DestinationsService,
    private colisService: ColisService,
    private route: ActivatedRoute,
    private toastrS: ToastrService
  ) { }

  toastr = this.toastrS
  private id = this.route.snapshot.params['id']

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

}
