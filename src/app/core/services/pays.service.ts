import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Pays} from "../../shared/models/pays";

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(
    private http:HttpClient
  ) { }

  private URL_API:string = environment.api

  postPays(pays: Pays){
    return this.http.post(`${this.URL_API}/pays`,pays)
  }

  getPays():Observable<Pays[]>{
    return this.http.get<Pays[]>(`${this.URL_API}/pays`);
  }

  putPays(pays: Pays) {
    return this.http.put(`${this.URL_API}/pays/${pays.id}`,pays)
  }

  deletePays(pays: Pays) {
    return this.http.delete(`${this.URL_API}/pays/${pays.id}`)
  }


}
