import {filter} from 'rxjs/operators';
import {Component, OnInit, ViewChild, AfterViewInit, Inject, Renderer2, ElementRef} from '@angular/core';
import {DOCUMENT, Location, LocationStrategy, PathLocationStrategy, PopStateEvent} from '@angular/common';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription ,  Observable } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import {ModuleStoreService} from "../../core/store/module-store.service";
import {User} from "../../shared/models/user";
import {Params} from "../../shared/models/params";

@Component({
  selector: 'app-users-layout',
  templateUrl: './users-layout.component.html',
  styleUrls: ['./users-layout.component.scss']
})
export class UsersLayoutComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
  ngOnInit() {
    let navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      }else{
        window.document.activeElement.scrollTop = 0;
      }
      this.navbar.sidebarClose();

      this.renderer.listen('window', 'scroll', (event) => {
        const number = window.scrollY;
        var _location = this.location.path();
        _location = _location.split('/')[2];

        if (number > 150 || window.pageYOffset > 150) {
          navbar.classList.remove('navbar-transparent');
        } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
          // remove logic
          navbar.classList.add('navbar-transparent');
        }
      });
    });
  }

}
