import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MenuItem } from './menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  private visible = true;
  visible$: BehaviorSubject<boolean> = new BehaviorSubject(this.visible);
  private position = 'side';
  position$: BehaviorSubject<string> = new BehaviorSubject(this.position);

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
      { label: 'Admin', url: 'admin' },
    ]);
  }

  toggleMenu() {
    this.visible = !this.visible;
    this.visible$.next(this.visible);
  }
}
