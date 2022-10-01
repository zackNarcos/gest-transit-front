import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../shared/services/profile/profile.service";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    isAdmin: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/me/colis', title: 'Mes colis',  icon:'shopping_box', class: '',isAdmin: false },
    { path: '/colis', title: 'Colis entrant',  icon:'shopping_box', class: '',isAdmin: false },
    { path: '/utilisateurs', title: 'Employées',  icon: 'files_paper', class: '',isAdmin: true },
    { path: '/destinations', title: 'Destinations',  icon:'location_map-big', class: '',isAdmin: true },
    { path: '/pays', title: 'Pays',  icon:'location_map-big', class: '',isAdmin: true },
    { path: '/inscription', title: 'Ajouter un utilisateur',  icon: 'arrows-1_cloud-upload-94', class: '',isAdmin: true },
    { path: '/nouveau-coli', title: 'Nouveau coli',  icon:'objects_spaceship', class: 'active active-pro h5',isAdmin: false },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isAdmin: boolean

  constructor(
    private profilService: ProfileService
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.profilService.getProfile().subscribe(profile => {
      this.isAdmin = profile['roles'][0] === "ROLE_ADMIN";
    })
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
