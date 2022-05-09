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
    return this.http.get<MenuItem[]>('/assets/top-items.json');
  }

  toggleMenu() {
    this.visible = !this.visible;
    this.visible$.next(this.visible);
  }
}
