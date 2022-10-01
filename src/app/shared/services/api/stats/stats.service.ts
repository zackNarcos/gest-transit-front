import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalService} from "../../local-storage/local.service";
import {environment} from "../../../../../environments/environment";
import {Statistiques} from "../../../models/statistiques";

@Injectable({
  providedIn: 'root'
})
export class StatsService {


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStore: LocalService
  ) { }
  private URL_API:string = environment.api

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

  getStat():Observable<Statistiques>{
    return this.httpClient.get<Statistiques>(`${this.URL_API}api/statistiques`, this.setoption());
  }
}
