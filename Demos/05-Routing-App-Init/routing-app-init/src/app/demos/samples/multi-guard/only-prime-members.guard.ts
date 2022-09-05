import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MockAuthService } from './mock-auth.service';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OnlyPrimeMembersGuard implements CanActivate {
  constructor(private as: MockAuthService, private sns: SnackbarService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.as.hasPrimeSubscription().pipe(
      tap((ps) => {
        if (!ps) {
          this.sns.displayAlert('No Access', 'Access only for prime members');
        }
      })
    );
  }
}
