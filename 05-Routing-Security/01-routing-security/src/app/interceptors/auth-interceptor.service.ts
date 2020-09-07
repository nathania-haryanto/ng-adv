import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleAuthTwoService } from './simple-auth-two.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  constructor(public auth: SimpleAuthTwoService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('AuthInterceptorService');
    if (this.auth.isAuthenticated) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this.auth.authToken
        ),
      });
    } else {
      //  this.router.navigate(['LoginPage']);
    }

    return next.handle(request);
  }
}
