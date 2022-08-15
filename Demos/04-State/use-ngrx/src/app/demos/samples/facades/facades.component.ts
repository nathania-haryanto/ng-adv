import { Component } from '@angular/core';
import { AppFacade } from '../../../state/app.facade';

@Component({
  selector: 'app-facades',
  templateUrl: './facades.component.html',
  styleUrls: ['./facades.component.scss'],
})
export class FacadesComponent {
  constructor(private af: AppFacade) {}

  isMockAuthenticated = this.af.getIsMockAuthenticated();

  toggleAuth() {
    this.af.toggleAuth();
  }
}
