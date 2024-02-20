import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Destinations} from "../../shared/models/destinations";
import {DestinationsService} from "../../core/services/destinations.service";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-destinationss',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {

  isAdmin: boolean = false;
  constructor(
    private moduleStoreService: ModuleStoreService
  ) {
    this.moduleStoreService.getUser().subscribe(user => {
      if (user) {
        const roles = user.roles;
        this.isAdmin = roles.includes('ROLE_ADMIN');
      }
    });
  }

  destinations$ = this.moduleStoreService.selectDestinations();

  lockUser(destination: Destinations, b: boolean) {
    destination.isArchivate = b
    this.moduleStoreService.updateDestination(destination)
  }
}
