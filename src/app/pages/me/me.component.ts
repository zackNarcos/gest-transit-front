import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {Destinations} from "../../shared/models/destinations";
import {Pays} from "../../shared/models/pays";
import {ModuleStoreService} from "../../core/store/module-store.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Params} from "../../shared/models/params";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  private wrongCredential: boolean;
  destinations : Pays[]
  destination : Destinations = new Destinations()

  stats$ = this.moduleStoreService.selectColisStat()
  month = new Date().getMonth()+1;
  year = new Date().getFullYear();

  searchForm = new FormGroup({
    year: new FormControl(this.year, Validators.required),
    month: new FormControl(this.month, Validators.required),
  });
  constructor(
    private moduleStoreService: ModuleStoreService,
  ) {
    this.moduleStoreService.loadColisStat({month: this.month, year: this.year})
    this.searchForm.valueChanges.subscribe({
      next: () => {
        const params: Params = {
          year: this.searchForm.get('year').value,
          month: this.searchForm.get('month').value,
        }
        this.moduleStoreService.loadColisStat(params)
      }
    })
  }

  user : User;

  ngOnInit(): void {
    this.moduleStoreService.selectUser().subscribe(user => {
      this.user = user
    })
  }
}
