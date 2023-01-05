import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-flex-layout-api',
  templateUrl: './flex-layout-api.component.html',
  styleUrls: ['./flex-layout-api.component.scss'],
})
export class FlexLayoutApiComponent implements OnInit {
  constructor(private obsMedia: MediaObserver) {
    this.subscribeScreen();
  }

  watcher: Subscription;
  mq: string;
  isPhone: boolean;
  isTablet: boolean;

  ngOnInit() {}

  subscribeScreen() {
    this.watcher = this.obsMedia
      .asObservable()
      .pipe(
        tap((changes: MediaChange[]) => console.log('changes: ', changes)),
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        console.log('change from media observer:', change);
        this.mq = change.mqAlias;
        switch (change.mqAlias) {
          case 'xs':
            this.isPhone = true;
            this.isTablet = false;
            break;
          case 'sm':
            this.isPhone = false;
            this.isTablet = true;
            break;
          default:
            this.isPhone = false;
            this.isTablet = false;
            break;
        }
      });
  }

  getClass() {
    return this.isPhone ? 'phoneClass' : 'notPhoneClass';
  }
}
