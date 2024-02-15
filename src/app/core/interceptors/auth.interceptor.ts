import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from "../services/local-storage.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          "auth-token": `${token}`,
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, auth-token",
        },
      });
    } else {
      this.router.navigate(['/auth/login']).then(r => console.log(r));
    }
    return next.handle(request);
  }
}
