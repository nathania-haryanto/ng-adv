import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MockAuthService } from './mock-auth.service';
import { tap } from 'rxjs/operators';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class OnlyAuthenticatedGuard implements CanActivate {
  constructor(private as: MockAuthService, private sns: SnackbarService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.as.isLoggedIn().pipe(
      tap((authenticated) => {
        if (!authenticated) {
          this.sns.displayAlert(
            'No Access',
            'Access only for authenticated users'
          );
        }
      })
    );
  }
}
