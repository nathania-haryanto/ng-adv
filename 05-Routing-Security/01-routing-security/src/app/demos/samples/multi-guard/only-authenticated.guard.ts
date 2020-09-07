import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SimpleAuthService } from './simple-auth.service';

@Injectable({
  providedIn: 'root',
})
export class OnlyAuthenticatedGuard implements CanActivate {
  constructor(private as: SimpleAuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.as.isLoggedIn();
  }
}
