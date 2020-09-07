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
export class OnlyPrimeMembersGuard implements CanActivate {
  constructor(private as: SimpleAuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return this.as.hasPrimeSubscription();

    if (this.as.hasPrimeSubscription()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");

      return false;
    }
  }
}
