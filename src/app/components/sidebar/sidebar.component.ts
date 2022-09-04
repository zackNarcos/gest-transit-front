import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/tableau-de-bord', title: 'Tableau de Bord',  icon: 'design_app', class: '' },
    { path: '/utilisateurs', title: 'Employées',  icon: 'files_paper', class: '' },
    { path: '/inscription', title: 'Ajouter un utilisateur',  icon: 'arrows-1_cloud-upload-94', class: '' },
    { path: '/destinations', title: 'Destinations',  icon:'location_map-big', class: '' },
    { path: '/colis', title: 'Colis',  icon:'shopping_box', class: '' },

    { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    { path: '/nouveau-coli', title: 'Nouveau coli',  icon:'objects_spaceship', class: 'active active-pro h5' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
