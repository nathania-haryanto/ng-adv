import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAuthors } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { getAuthors } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  authors = this.store.select(getAuthors);

  ngOnInit(): void {
    this.store.dispatch(new LoadAuthors());
  }
}
