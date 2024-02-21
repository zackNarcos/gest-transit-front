import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {Colis} from "../../shared/models/colis";
import {ColisService} from "../../core/services/colis.service";
import {ModuleStoreService} from "../../core/store/module-store.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Params} from "../../shared/models/params";

@Component({
  selector: 'app-colis-list',
  templateUrl: './colis-list.component.html',
  styleUrls: ['./colis-list.component.scss']
})
export class ColisListComponent {
  month = new Date().getMonth()+1;
  year = new Date().getFullYear();

  searchForm = new FormGroup({
    year: new FormControl(this.year, Validators.required),
    month: new FormControl(this.month, Validators.required),
  });

  constructor(
    private moduleStoreService: ModuleStoreService,
    private router: Router,
  ) {
    const param: Params = {
      month: new Date().getMonth()+1,
      year: new Date().getFullYear()
    }
    this.moduleStoreService.loadOutColis(param)

    this.searchForm.valueChanges.subscribe({
      next: () => {
        const params: Params = {
          year: this.searchForm.get('year').value,
          month: this.searchForm.get('month').value,
        }
        this.moduleStoreService.loadOutColis(params)
      }
    })
  }

  colis$ = this.moduleStoreService.selectOutColis()

  upColis(coli: Colis, status: string) {
    coli.status = status
    this.moduleStoreService.updateColis(coli)
  }

  getReliquat(coli: Colis) {
    const reliquat = {
      montant: coli.reste,
      date: new Date(),
      colisId: coli._id
    }
    this.moduleStoreService.addColisReliquat(reliquat)
    coli.isSolde = true
    this.moduleStoreService.updateColis(coli)
  }

  async goTo(coli: Colis) {
    this.moduleStoreService.setSelectedColis(coli)
    await this.router.navigate(['colis', coli._id])
  }
}
