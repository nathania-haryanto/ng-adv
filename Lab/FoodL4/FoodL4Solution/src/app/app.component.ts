import { Component } from '@angular/core';
import { MenuFacade } from './store/facades/menu.facade';
import { AuthFacade } from './auth/store/facades/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FirstAngular';
  menuVisible$ = this.mf.sideNavVisible;
  menuPosition$ = this.mf.sideNavPosition;
  // loggedIn$ = this.af
  // .isAuthenticated()
  // .pipe(tap((loggedin) => console.log('logged in', loggedin)));

  constructor(public mf: MenuFacade, public af: AuthFacade) {}
}
