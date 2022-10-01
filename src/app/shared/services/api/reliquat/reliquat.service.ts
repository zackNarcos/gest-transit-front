import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "../../local-storage/local.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Colis} from "../../../models/colis";
import {Reliquat} from "../../../models/reliquat";

@Injectable({
  providedIn: 'root'
})
export class ReliquatService {

  constructor(
    private http:HttpClient,
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



  postReliquat(reliquat: Reliquat){
    return this.http.post(`${this.URL_API}api/reliquats`,reliquat, this.setoption())
  }

  getReliquats():Observable<Reliquat[]>{
    return this.http.get<Reliquat[]>(`${this.URL_API}api/reliquats`, this.setoption());
  }
  getReliquat(id):Observable<Reliquat>{
    return this.http.get<Reliquat>(`${this.URL_API}api/reliquats/${id}`, this.setoption());
  }

  findReliquatByIdColi(id):Observable<Reliquat>{
    return this.http.get<Reliquat>(`${this.URL_API}api/reliquats?coli=${id}`, this.setoption());
  }

  putReliquat(reliquat: Reliquat) {
    return this.http.put(`${this.URL_API}api/reliquats/${reliquat.id}`,reliquat, this.setoption())
  }

  deleteReliquat(reliquat: Reliquat) {
    return this.http.delete(`${this.URL_API}api/reliquats/${reliquat.id}`, this.setoption())
  }

}
