import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MenuItem } from './menu-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private mediaObserver: MediaObserver, private http: HttpClient) {
    this.handleChange();
  }

  visible$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  position$: BehaviorSubject<string> = new BehaviorSubject('side');

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.visible$.next(change.mqAlias === 'xs' ? false : true);
        this.position$.next(change.mqAlias === 'xs' ? 'over' : 'side');
      });
  }

  getTopItems(): Observable<MenuItem[]> {
    return of([
      { label: 'Home', url: '' },
      { label: 'Demos', url: 'demos' },
    ]);
  }

  toggleMenu() {
    let status = !this.visible$.getValue();
    this.visible$.next(status);
  }
}
