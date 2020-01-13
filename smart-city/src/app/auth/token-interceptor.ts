import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {  
    // Ajoute le token dans les headers
    constructor(public authService: AuthService) {

    }  
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Apply the headers
      if (this.authService.isAuthenticated()) {
          req = req.clone({
              setHeaders: {
                  'Authorization': `bearer ${this.authService.getToken().accessToken}`
              }
          });
      }
      // Also handle errors globally
      return next.handle(req).pipe(
          tap(x => x, err => {
              // Handle this err
              //    console.error(`Error performing request, status code = ${err.status}`);
          })
      );
  }
}


// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   request = request.clone({
//     setHeaders: {
//       Authorization: `Bearer ${this.auth.getToken().accessToken}`
//     }
//   });    
//   return next.handle(request);