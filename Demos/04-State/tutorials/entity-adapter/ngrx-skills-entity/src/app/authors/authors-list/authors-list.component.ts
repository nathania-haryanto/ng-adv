import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent {
  // constructor(private store: Store<AppState>) {}
  // authors = this.store.select(getAuthors);
  // ngOnInit(): void {
  //   this.store.dispatch(new LoadAuthors());
  // }
}
