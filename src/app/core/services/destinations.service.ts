import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Destinations} from "../../shared/models/destinations";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(
    private http:HttpClient,
  ) { }

  private URL_API:string = environment.api

  postDestination(destination: Destinations){
    return this.http.post(`${this.URL_API}/destinations`,destination)
  }

  getDestinations():Observable<Destinations[]>{
    return this.http.get<Destinations[]>(`${this.URL_API}/destinations`);
  }

  putDestination(destination: Destinations) {
    return this.http.put(`${this.URL_API}/destinations/${destination.id}`,destination)
  }

  deleteDestination(destination: Destinations) {
    return this.http.delete(`${this.URL_API}/destinations/${destination.id}`)
  }
}
