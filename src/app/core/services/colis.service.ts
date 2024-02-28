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
    return this.http.post<Colis[]>(`${this.URL_API}/colis/all`,param);
  }

  getColisById(id: string):Observable<Colis>{
    return this.http.get<Colis>(`${this.URL_API}/colis/${id}`);
  }

  getColisIn(param: Params):Observable<Colis[]>{
    return this.http.post<Colis[]>(`${this.URL_API}/colis/in`,param);
  }

  getColisOut(param: Params):Observable<Colis[]>{
    return this.http.post<Colis[]>(`${this.URL_API}/colis/out`,param);
  }

  putColis(coli: Colis) {
    return this.http.put(`${this.URL_API}/colis/${coli.id}`,coli)
  }

  deleteColis(coli: Colis) {
    return this.http.delete(`${this.URL_API}/colis/${coli.id}`)
  }

  getColisStat(param: Params):Observable<any>{
    return this.http.post<any>(`${this.URL_API}/colis/stat`,param);
  }

  findColis(param: Params):Observable<Colis>{
    return this.http.post<Colis>(`${this.URL_API}/colis/find`,param);
  }
}
