import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
    selector: 'app-components',
    templateUrl: './accueil.component.html',
    styles: []
})

export class AccueilComponent implements OnInit, OnDestroy {
    data : Date = new Date();

    page = 4;
    focus: any;
    focus1: any;

    istepInit = false;
    isStepTransit = false;
    isStepArrive = false;
    isStepWait = false;
    isStepDelivred = false;

    date: {year: number, month: number};

    colis = null

    formSearch = new FormGroup({
      code: new FormControl('', Validators.required),
      telephone: new FormControl(''),
    })

    constructor(
      config: NgbAccordionConfig,
      private renderer : Renderer2,
      private moduleStoreService: ModuleStoreService,
    ) {
        config.closeOthers = true;
      this.moduleStoreService.selectFindColis().subscribe((colis) => {
        this.colis = colis[0]

        if (this.colis) {
          this.istepInit = true;
          this.isStepTransit = false;
          this.isStepArrive = false;
          this.isStepWait = false;
          this.isStepDelivred = false;

          if (this.colis.status === 'ATTENTE_EXPEDITION') {
            this.istepInit = true;
            this.isStepTransit = false;
            this.isStepArrive = false;
            this.isStepWait = false;
            this.isStepDelivred = false;
          }

          if (this.colis.status === 'TRANSIT') {
            this.istepInit = true;
            this.isStepTransit = true;
            this.isStepArrive = false;
            this.isStepWait = false;
            this.isStepDelivred = false;
          }

          if (this.colis.status === 'EXPEDIÉ') {
            this.istepInit = true;
            this.isStepTransit = true;
            this.isStepArrive = true;
            this.isStepWait = true;
            this.isStepDelivred = false;
          }

          if (this.colis.status === 'RECUPERÉ') {
            this.istepInit = true;
            this.isStepTransit = true;
            this.isStepArrive = true;
            this.isStepWait = true;
            this.isStepDelivred = true;
          }
        }

      })
    }

    ngOnInit() {
      let navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      let body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
      navbar.classList.remove('navbar-transparent');
      //add navbar-dark class to navbar when the sroll is over 100px
      this.renderer.listen('window', 'scroll', (event) => {
          const number = window.scrollY;
          if (number > 500 || window.pageYOffset > 500) {
              // add logic
              navbar.classList.add('navbar-transparent');
          } else {
              // remove logic
              navbar.classList.remove('navbar-transparent');
          }
      });


    }
    ngOnDestroy(){
        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }

  search() {
    console.log(this.formSearch.valid)
      if (this.formSearch.valid) {
        const code = this.formSearch.get('code').value;
        const telephone = this.formSearch.get('telephone').value;
        this.moduleStoreService.findColis({code})
      }
    }
}
