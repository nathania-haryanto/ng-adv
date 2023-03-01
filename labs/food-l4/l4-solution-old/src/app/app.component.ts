import { Component } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthFacade } from './auth/store/facades/auth.facade';
import { MenuFacade } from './store/facades/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food-App';

  menuVisible$ = this.mf.sideNavVisible;
  menuPosition$ = this.mf.sideNavPosition;
  loggedIn$ = !environment.authEnabled
    ? of(true)
    : this.af
        .isLoggedIn()
        .pipe(tap((loggedin) => console.log('logged in', loggedin)));

  constructor(public mf: MenuFacade, public af: AuthFacade) {}
}
