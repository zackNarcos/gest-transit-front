import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss']
})
export class PaysListComponent{

  constructor(
    private moduleStoreService: ModuleStoreService,
    private router: Router
  ) { }

  pays$ = this.moduleStoreService.selectPays()
}
