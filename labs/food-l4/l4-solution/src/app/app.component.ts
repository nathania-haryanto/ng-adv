import { Component } from '@angular/core';
import { of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthFacade } from './auth/state/auth.facade';
import { MenuFacade } from './state/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuVisible$ = this.mf.sideNavVisible;
  menuPosition$ = this.mf.sideNavPosition;
  loggedIn$ = !environment.authEnabled
    ? of(true)
    : this.af
      .isAuthenticated()
      .pipe(tap((loggedin) => console.log('logged in', loggedin)));

  constructor(public mf: MenuFacade, public af: AuthFacade) { }
}
