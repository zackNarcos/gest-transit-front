import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "../../local-storage/local.service";
import {environment} from "../../../../../environments/environment";
import {User} from "../../../models/user";
import {Observable} from "rxjs";
import {Destinations} from "../../../models/destinations";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(
    private http:HttpClient,
    private localStore: LocalService
  ) { }

  private URL_API:string = environment.api
  private URL_API2:string = environment.api2

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



  postDestination(destination: Destinations){
    return this.http.post(`${this.URL_API}api/destinations`,destination, this.setoption())
  }

  getDestinations():Observable<Destinations[]>{
    return this.http.get<Destinations[]>(`${this.URL_API}api/destinations`, this.setoption());
  }
  getDestination(id):Observable<Destinations>{
    return this.http.get<Destinations>(`${this.URL_API}api/destinations/${id}`, this.setoption());
  }

  findDestinationByLibelle(libelle):Observable<Destinations>{
    return this.http.get<Destinations>(`${this.URL_API}api/destinations?libelle=${libelle}`, this.setoption());
  }
  getDestinationByURI(uri):Observable<Destinations>{
    return this.http.get<Destinations>(`${this.URL_API2+uri}`, this.setoption());
  }


  putDestinationr(destination: Destinations) {
    return this.http.put(`${this.URL_API}api/destinations/${destination.id}`,destination, this.setoption())
  }

}
