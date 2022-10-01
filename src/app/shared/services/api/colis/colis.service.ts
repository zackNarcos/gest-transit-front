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

  getColis(id: number,year: number, month: number, day: number):Observable<Colis[]>{
    return this.http.get<Colis[]>(`${this.URL_API}api/getcolis/me?id=${id}&year=${year}&month=${month}&day=${day}`, this.setoption());
  }

  getColisIn(id: number,year: number, month: number):Observable<Colis[]>{
    return this.http.get<Colis[]>(`${this.URL_API}api/getcolis/in?id=${id}&year=${year}&month=${month}`, this.setoption());
  }

  getColisByUser(id: number,year: number, month: number, day: number):Observable<Colis[]>{
    return this.http.get<Colis[]>(`${this.URL_API}api/getcolis?id=${id}&year=${year}&month=${month}&day=${day}`, this.setoption());
  }
  getColi(id):Observable<Colis>{
    return this.http.get<Colis>(`${this.URL_API}api/colis/${id}`, this.setoption());
  }

  findColisByExpediteurName(name, code):Observable<Colis[]>{
    return this.http.get<Colis[]>(`${this.URL_API}api/colis?nomExpediteur=${name}&numero=${code}`, this.setoption());
  }

  findColisByCode(code):Observable<Colis>{
    return this.http.get<Colis>(`${this.URL_API}api/colis?numero=${code}`, this.setoption());
  }

  putColis(coli: Colis) {
    return this.http.put(`${this.URL_API}api/colis/${coli.id}`,coli, this.setoption())
  }

  deleteColis(coli: Colis) {
    return this.http.delete(`${this.URL_API}api/colis/${coli.id}`, this.setoption())
  }

}
