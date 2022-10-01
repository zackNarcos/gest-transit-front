import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalService} from "../../../local-storage/local.service";
import {environment} from "../../../../../../environments/environment";
import {Observable} from "rxjs";
import {Statistiques} from "../../../../models/statistiques";

@Injectable({
  providedIn: 'root'
})
export class MonthStatsService {

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

  getSumAvances(id: number,year: number, month: number):Observable<number>{
    return this.httpClient.get<number>(`${this.URL_API}api/sum/avances?id=${id}&year=${year}&month=${month}`, this.setoption());
  }
  getSumReliquats(id: number,year: number, month: number):Observable<number>{
    return this.httpClient.get<number>(`${this.URL_API}api/sum/reliquats?id=${id}&year=${year}&month=${month}`, this.setoption());
  }
  getSumgains(id: number,year: number, month: number):Observable<number>{
    return this.httpClient.get<number>(`${this.URL_API}api/sum/gains?id=${id}&year=${year}&month=${month}`, this.setoption());
  }
  getQtes(id: number,year: number, month: number):Observable<number>{
    return this.httpClient.get<number>(`${this.URL_API}api/count/colis?id=${id}&year=${year}&month=${month}`, this.setoption());
  }
}
