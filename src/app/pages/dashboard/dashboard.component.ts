import { Component, OnInit } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModuleStoreService} from "../../core/store/module-store.service";
import {Params} from "../../shared/models/params";
import {Observable} from "rxjs";
import {Colis} from "../../shared/models/colis";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
    month = new Date().getMonth()+1;
    year = new Date().getFullYear();

    searchForm = new FormGroup({
      year: new FormControl(this.year, Validators.required),
      month: new FormControl(this.month, Validators.required),
    });

    colis$: Observable<Colis[]>
    stats$ = this.moduleStoreService.selectColisStat()
    reliquat$ = this.moduleStoreService.selectColisReliquat()

    constructor(
      private moduleStoreService: ModuleStoreService,
    ) {
      const param: Params = {
        month: new Date().getMonth()+1,
        year: new Date().getFullYear()
      }

      this.moduleStoreService.loadColisStat(param)
      this.moduleStoreService.loadInColis(param)
      this.moduleStoreService.getColisReliquatByMonth(param)
      this.moduleStoreService.selectInColis().subscribe({
        next: (colis) => {
          const last = colis.slice(-5)
          this.colis$ = new Observable<Colis[]>(subscriber => {
            subscriber.next(last)
          })
        }
      })
    }

}
