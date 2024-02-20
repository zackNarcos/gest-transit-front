import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "../services/user.service";
import {LocalStorageService} from "../services/local-storage.service";
import {take} from "rxjs/operators";
import {logging} from "protractor";
import {ModuleStoreService} from "../store/module-store.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {

  constructor(
    private moduleStoreService: ModuleStoreService,
  ) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>  {
    return new Promise((resolve, reject) => {
      this.moduleStoreService.getUser().pipe(take(1)).subscribe(user => {
        if (user) {
          const roles = user.roles;
          const isAdmin = roles.includes('ROLE_ADMIN');
          if (isAdmin) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });
    });
  }
}
