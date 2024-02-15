import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "../services/user.service";
import {LocalStorageService} from "../services/local-storage.service";
import {take} from "rxjs/operators";
import {logging} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>  {

    const token = this.localStorageService.getItem('token');
    const isAuthenticated = token !== null;

    if (!isAuthenticated) {
      await this.router.navigate(['/auth/login']);
      if (state.url !== '/auth/login') {
        this.localStorageService.setItem('returnUrl', state.url);
      } else {
        this.localStorageService.setItem('returnUrl', '/');
      }
    }

    if (isAuthenticated) {
      return isAuthenticated;
    } else {
      return false;
    }
  }
}
