import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../../auth/state/auth.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-firebase-auth',
  templateUrl: './firebase-auth.component.html',
  styleUrls: ['./firebase-auth.component.scss'],
})
export class FirebaseAuthComponent implements OnInit {
  user$ = this.af.User.pipe(tap((u) => console.log(u)));

  constructor(private af: AuthFacade) {}

  ngOnInit(): void {}
}
