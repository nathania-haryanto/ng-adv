import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import { getAuthors } from '../../store/selectors/app.selectors';
import { LoadAuthors } from '../../store/actions/app.actions';

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
