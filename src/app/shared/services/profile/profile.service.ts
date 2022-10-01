import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {observable, Observable} from "rxjs";
import {Profile} from "../../models/profile";
import {LocalService} from "../local-storage/local.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Colis} from "../../models/colis";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements CanActivate {

  profile = null
  uri = environment.api2 + "/api/me"
  uriPass = environment.api2 + "/api/string/h"

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStore: LocalService
  ) { }

  setoption(){
    const token = this.localStore.getData('token')
    const headerDict = {
      'Authorization': `Bearer ${token}`,
      'Accept' : 'application/json'
    }
    return {
      headers: new HttpHeaders(headerDict),
    }
  }

  getProfile(){
    return new Observable((observer) => {
      if (this.profile){
        observer.next(this.profile)
        observer.complete()
      }else {
        this.httpClient.get(this.uri, this.setoption()).subscribe(profile => {
          this.profile = profile
          observer.next(profile)
          observer.complete()
        },error => {
          observer.error(error)
          observer.complete()
        })
      }
    })
  }

  getPasswordHash(password: string):Observable<string>{
    return this.httpClient.get<string>(`${this.uriPass}?string=${password}`, this.setoption());
  }

  getMe():Observable<User>{
    return this.httpClient.get<User>(`${this.uri}`, this.setoption());
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable((observer) => {
      this.getProfile().subscribe(profile => {
        if (this.profile['isLocked']==true)
        {
          this.router.navigate(['/login'])
        }
        if (this.profile['roles'][0] === "ROLE_EMPLOYE"){
          if (state.url == "/inscription" || state.url == "/pays" || state.url == "/destinations" || state.url == "/utilisateurs" || state.url == "/nouvelle-destination"){
            this.router.navigate(['/nouveau-coli'])
          }
        }
        observer.next(true)
        observer.complete()
      },error => {
        this.router.navigate(['/login'])
        observer.next(false) //pour indique que nous avons pas le droit d'acceder a la paga en questi
        observer.complete()
      })
    });
  }
}
