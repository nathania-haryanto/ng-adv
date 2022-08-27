import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducer';
// import { ToggleCredits, ToggleMenu } from '../store/actions/app.actions';
// import { State } from '../store/reducers/app.reducer';
// import {
//   getCreditsVisible,
//   getMenuVisible,
// } from '../store/selectors/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public store: Store<State>) {}

  creditsVisible = this.store.select(getCreditsVisible);
  menuVisible = this.store.select(getMenuVisible);

  ngOnInit(): void {}

  // toggleCredits(): void {
  //   this.store.dispatch(new ToggleCredits());
  // }

  // tobbleMenu(): void {
  //   this.store.dispatch(new ToggleMenu());
  // }
}
function getCreditsVisible(getCreditsVisible: any) {
  throw new Error('Function not implemented.');
}

function getMenuVisible(getMenuVisible: any) {
  throw new Error('Function not implemented.');
}
