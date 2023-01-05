import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducer';
import { toggleCredits, toggleMenu } from '../state/app.actions';
import { getCreditsVisible, getMenuVisible } from '../state/app.selectors';

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

  toggleCredits(): void {
    this.store.dispatch(toggleCredits());
  }

  tobbleMenu(): void {
    this.store.dispatch(toggleMenu());
  }
}
