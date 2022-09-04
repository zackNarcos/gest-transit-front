import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "../../local-storage/local.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Colis} from "../../../models/colis";

@Injectable({
  providedIn: 'root'
})
export class ColisService {

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



  postColi(coli: Colis){
    return this.http.post(`${this.URL_API}api/colis`,coli, this.setoption())
  }

  getColis():Observable<Colis[]>{
    return this.http.get<Colis[]>(`${this.URL_API}api/colis`, this.setoption());
  }
  getColi(id):Observable<Colis>{
    return this.http.get<Colis>(`${this.URL_API}api/colis/${id}`, this.setoption());
  }

  findColisByCode(code):Observable<Colis>{
    return this.http.get<Colis>(`${this.URL_API}api/colis?numero=${code}`, this.setoption());
  }


  putColis(coli: Colis) {
    return this.http.put(`${this.URL_API}api/colis/${coli.id}`,coli, this.setoption())
  }

}
