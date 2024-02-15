import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "../../local-storage/local.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Pays} from "../../../models/pays";

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(
    private http:HttpClient,
    private localStore: LocalService
  ) { }

  private URL_API:string = environment.api
  private URL_API2:string = environment.api

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



  postPays(pays: Pays){
    return this.http.post(`${this.URL_API}api/pays`,pays, this.setoption())
  }

  getPayss():Observable<Pays[]>{
    return this.http.get<Pays[]>(`${this.URL_API}api/pays`, this.setoption());
  }
  getPays(id):Observable<Pays>{
    return this.http.get<Pays>(`${this.URL_API}api/pays/${id}`, this.setoption());
  }

  findPaysByLibelle(libelle):Observable<Pays>{
    return this.http.get<Pays>(`${this.URL_API}api/pays?nom=${libelle}`, this.setoption());
  }
  getPaysByURI(uri):Observable<Pays>{
    return this.http.get<Pays>(`${this.URL_API2+uri}`, this.setoption());
  }

  putPays(pays: Pays) {
    return this.http.put(`${this.URL_API}api/pays/${pays.id}`,pays, this.setoption())
  }

  deletePays(pays: Pays) {
    return this.http.delete(`${this.URL_API}api/pays/${pays.id}`, this.setoption())
  }


}
