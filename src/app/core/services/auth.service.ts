import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private readonly router: Router,
    private localStorageService: LocalStorageService,
    private http: HttpClient,
  ) {}
  baseUrl = environment.api;


  public login(email: string, password: string) {
    const url = `${this.baseUrl}/auth/login`;

    const body = {
      email: email.trim(),
      password: password,
    }

    return this.http.post(url, body);
  }
  async signOut(): Promise<void> {
    this.expireAuthentication();
    this.localStorageService.removeItem('token')
    this.localStorageService.removeItem('userId')
    await this.router.navigate(['/auth/login']);
  }

  expireAuthentication() {
  //   TODO: implement this
  }

}
