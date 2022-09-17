import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AuthFacade } from '../../state/auth.facade';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent implements OnInit {
  user = this.af.User;

  constructor(private af: AuthFacade) {}

  ngOnInit(): void {}
}
