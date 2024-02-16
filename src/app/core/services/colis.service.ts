import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Colis} from "../../shared/models/colis";
import {Params} from "../../shared/models/params";

@Injectable({
  providedIn: 'root'
})
export class ColisService {

  constructor(
    private http:HttpClient,
  ) { }

  private URL_API:string = environment.api

  postColi(coli: Colis){
    return this.http.post(`${this.URL_API}/colis`,coli)
  }

  getColis(param: Params):Observable<Colis[]>{
    return this.http.post<Colis[]>(`${this.URL_API}/getcolis`,param);
  }

  putColis(coli: Colis) {
    return this.http.put(`${this.URL_API}/colis/${coli._id}`,coli)
  }

  deleteColis(coli: Colis) {
    return this.http.delete(`${this.URL_API}/colis/${coli._id}`)
  }

}
