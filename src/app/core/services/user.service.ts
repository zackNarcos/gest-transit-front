import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.api;

  constructor(
    private http: HttpClient,
  ) { }

  public register(user: User) {
    const url = `${this.baseUrl}/users`;

    const body = {
      email: user.email.trim(),
      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      telephone: user.telephone,
      roles: user.roles,
      adresse: user.adresse,
      pays: user.pays,
      ville: user.ville,
      description: user.description,
      salaire: user.salaire,
      isLocked: user.isLocked,
    }

    return this.http.post(url, body);
  }

  public getMe(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public update(user: User) {
    const url = `${this.baseUrl}/users/${user._id}`;

    const body = {
      _id: user._id,
      email: user.email.trim(),
      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      telephone: user.telephone,
      roles: user.roles,
      adresse: user.adresse,
      pays: user.pays,
      ville: user.ville,
      description: user.description,
      salaire: user.salaire,
      isLocked: user.isLocked,
    }

    return this.http.patch(url, body);
  }

  public delete(id: string) {
    const url = `${this.baseUrl}/users/${id}`;

    return this.http.delete(url);
  }

}
