import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Params} from "../../shared/models/params";

@Injectable({
  providedIn: 'root'
})
export class MonthStatsService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  private URL_API:string = environment.api

  getSumAvances(params: Params):Observable<number>{
    return this.httpClient.post<number>(`${this.URL_API}/stats/avances`,params);
  }
  getSumReliquats(params: Params):Observable<number>{
    return this.httpClient.post<number>(`${this.URL_API}/stats/reliquats`,params);
  }
  getSumgains(params: Params):Observable<number>{
    return this.httpClient.post<number>(`${this.URL_API}/stats/gains`,params);
  }
  getQtes(params: Params):Observable<number>{
    return this.httpClient.post<number>(`${this.URL_API}/stats/colis`,params);
  }
}
