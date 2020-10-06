//httperror.interceptor.ts
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

import { Injectable } from '@angular/core';
   
   @Injectable({
    providedIn: 'root'
  })
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.auth.hasToken()) {

      const token = this.auth.authInfo.token;
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + token
        }
      });
    }
    return next.handle(request);

  }
}