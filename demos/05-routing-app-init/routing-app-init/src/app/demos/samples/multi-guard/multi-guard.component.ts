import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppFacade } from '../../../state/app.facade';

@Component({
  selector: 'app-multi-guard',
  templateUrl: './multi-guard.component.html',
  styleUrls: ['./multi-guard.component.scss'],
})
export class MultiGuardComponent implements OnInit {
  title = 'Using multible Auth Guards';
  user = this.af.getUser();

  allowToggleMember = this.af
    .getIsLoggedIn()
    .pipe(map((loggedin) => !loggedin));

  constructor(public af: AppFacade) {}

  ngOnInit(): void {}
}
