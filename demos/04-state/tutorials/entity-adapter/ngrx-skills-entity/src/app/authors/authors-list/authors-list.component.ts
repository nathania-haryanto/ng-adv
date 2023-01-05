import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.reducer';
import { loadAuthors } from '../../state/app.actions';
import { getAuthors } from '../../state/app.selectors';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent {
  constructor(private store: Store<State>) {}
  authors = this.store.select(getAuthors);
  ngOnInit(): void {
    this.authors.subscribe((data) => {
      if (data.length == 0) {
        this.store.dispatch(loadAuthors());
      }
    });
  }
}
