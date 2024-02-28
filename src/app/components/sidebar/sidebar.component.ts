import { Component, OnInit } from '@angular/core';
import {ModuleStoreService} from "../../core/store/module-store.service";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    isAdmin: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon:'fa-gauge', class: '',isAdmin: false },
    { path: '/admin/me/colis', title: 'Colis Sortant',  icon:'fa-arrow-right-from-bracket', class: '',isAdmin: false },
    { path: '/admin/colis-all', title: 'Tous les Colis',  icon:'fa-boxes-stacked', class: '',isAdmin: true },
    { path: '/admin/colis', title: 'Colis entrant',  icon:'fa-arrow-right-to-bracket', class: '',isAdmin: false },
    { path: '/admin/utilisateurs', title: 'Employées',  icon: 'fa-users-rectangle', class: '',isAdmin: true },
    { path: '/admin/destinations', title: 'Destinations',  icon:'fa-route', class: '',isAdmin: false },
    { path: '/admin/pays', title: 'Pays',  icon:'fa-earth-africa', class: '',isAdmin: true },
    { path: '/admin/inscription', title: 'Ajouter un utilisateur',  icon: 'fa-user-plus', class: '',isAdmin: true },
    { path: '/admin/nouveau-coli', title: 'Nouveau coli',  icon:'fa-file-circle-plus', class: 'active active-pro h5',isAdmin: false },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isAdmin: boolean = false;

  constructor(
    private moduleStoreService: ModuleStoreService
  ) {
    this.moduleStoreService.getUser().subscribe(user => {
      if (user) {
        const roles = user.roles;
        this.isAdmin = roles.includes('ROLE_ADMIN');
      }
      if (!this.isAdmin)
      this.menuItems = ROUTES.filter(menuItem => menuItem.isAdmin === !this.isAdmin);
    });
  }

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
