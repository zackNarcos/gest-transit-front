import { Injectable } from '@angular/core';
import { Router} from "@angular/router";
import {Observable} from "rxjs";
import {LocalService} from "../local-storage/local.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile = null
  uri = environment.api + "/me"

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

  getMe():Observable<User>{
    return this.httpClient.get<User>(`${this.uri}`, this.setoption());
  }

}
