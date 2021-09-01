import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SimpleAuthService } from './simple-auth.service';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class OnlyPrimeMembersGuard implements CanActivate {
  constructor(private as: SimpleAuthService, private sns: SnackbarService) {}

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
      this.sns.displayAlert('Problem', 'Zahlen oder draußen bleiben');

      return false;
    }
  }
}
