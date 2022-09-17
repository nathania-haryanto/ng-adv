import { Component, Input } from '@angular/core';
import { AuthFacade } from '../../state/auth.facade';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent {
  @Input() defaultButton = true;
  constructor(private af: AuthFacade) {}

  logOut() {
    this.af.signOut();
  }
}
