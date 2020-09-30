import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}
  private currTheme: BehaviorSubject<string> = new BehaviorSubject('default');

  toggleTheme() {
    const theme = this.currTheme.getValue() === 'default' ? 'dark' : 'default';
    console.log('curr theme:', theme);
    this.currTheme.next(theme);
  }

  getTheme(): Observable<string> {
    return this.currTheme;
  }
}
