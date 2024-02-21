import { Component, OnInit } from '@angular/core';
// import {ProfileService} from "../../shared/services/profile/profile.service";
// import {ApiUserService} from "../../shared/services/api/user/api-user.service";
// import {ColisService} from "../../shared/services/api/colis/colis.service";
import {Router} from "@angular/router";
import {Colis} from "../../shared/models/colis";
import {User} from "../../shared/models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModuleStoreService} from "../../core/store/module-store.service";
import {Params} from "../../shared/models/params";

@Component({
  selector: 'app-mes-colis',
  templateUrl: './mes-colis.component.html',
  styleUrls: ['./mes-colis.component.scss']
})
export class MesColisComponent{

  month = new Date().getMonth()+1;
  year = new Date().getFullYear();

  searchForm = new FormGroup({
    year: new FormControl(this.year, Validators.required),
    month: new FormControl(this.month, Validators.required),
  });

  constructor(
    private moduleStoreService: ModuleStoreService,
  ) {
    const param: Params = {
      month: new Date().getMonth()+1,
      year: new Date().getFullYear()
    }
    this.moduleStoreService.loadInColis(param)

    this.searchForm.valueChanges.subscribe({
      next: () => {
        const params: Params = {
          year: this.searchForm.get('year').value,
          month: this.searchForm.get('month').value,
        }
        this.moduleStoreService.loadInColis(params)
      }
    })
  }

  colis$ = this.moduleStoreService.selectInColis()
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
}
