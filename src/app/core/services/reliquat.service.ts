import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {LocalService} from "../../shared/services/local-storage/local.service";
import {Reliquat} from "../../shared/models/reliquat";
import {environment} from "../../../environments/environment";
import {Params} from "../../shared/models/params";

@Injectable({
  providedIn: 'root'
})
export class ReliquatService {

  constructor(
    private http:HttpClient
  ) { }

  private URL_API:string = environment.api

  postReliquat(reliquat: Reliquat){
    return this.http.post(`${this.URL_API}/colis/reliquats`, reliquat)
  }

  getReliquats(param: Params):Observable<Reliquat[]>{
    return this.http.post<Reliquat[]>(`${this.URL_API}/colis/reliquats/mount`, param);
  }
  getReliquat(id: string):Observable<Reliquat>{
    return this.http.get<Reliquat>(`${this.URL_API}/colis/reliquats/${id}`);
  }

  findReliquatByIdColi(id: string):Observable<Reliquat>{
    return this.http.post<Reliquat>(`${this.URL_API}/colis/reliquats/findbycolis`,{id:id});
  }

  putReliquat(reliquat: Reliquat) {
    return this.http.put(`${this.URL_API}/colis/reliquats/${reliquat.id}`,reliquat)
  }

  deleteReliquat(reliquat: Reliquat) {
    return this.http.delete(`${this.URL_API}/colis/reliquats/${reliquat.id}`)
  }

}
