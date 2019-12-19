import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

export class JwtInterceptor implements HttpInterceptor {  
    // Recup les réponses permet ajouter logique avant de recevoir
    constructor(public auth: AuthService) {}  
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // pipe permet ajouter methode sur du observable
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => { // tap résalise qlq sur l'observalbe en retournant le meme observable avec modif
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal

          // redirect vers login ! ! ! ! 
        }
      }
    }));
  }
}