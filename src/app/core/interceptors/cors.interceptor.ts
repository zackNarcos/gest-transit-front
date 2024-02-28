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
export class CorsInterceptor implements HttpInterceptor {

  constructor(
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const modifiedReq = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
      }
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(modifiedReq);
  }
}
