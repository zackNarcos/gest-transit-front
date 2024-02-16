import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {LocalService} from "../../shared/services/local-storage/local.service";
import {Reliquat} from "../../shared/models/reliquat";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReliquatService {

  constructor(
    private http:HttpClient
  ) { }

  private URL_API:string = environment.api

  postReliquat(reliquat: Reliquat){
    return this.http.post(`${this.URL_API}/reliquats`,reliquat)
  }

  getReliquats():Observable<Reliquat[]>{
    return this.http.get<Reliquat[]>(`${this.URL_API}/reliquats`);
  }
  getReliquat(id: string):Observable<Reliquat>{
    return this.http.get<Reliquat>(`${this.URL_API}/reliquats/${id}`);
  }

  findReliquatByIdColi(id: string):Observable<Reliquat>{
    return this.http.post<Reliquat>(`${this.URL_API}/reliquats/findbycolis`,{id:id});
  }

  putReliquat(reliquat: Reliquat) {
    return this.http.put(`${this.URL_API}/reliquats/${reliquat.id}`,reliquat)
  }

  deleteReliquat(reliquat: Reliquat) {
    return this.http.delete(`${this.URL_API}/reliquats/${reliquat.id}`)
  }

}
