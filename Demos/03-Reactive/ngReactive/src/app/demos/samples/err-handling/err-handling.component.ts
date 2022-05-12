import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import {
  catchError,
  delay,
  finalize,
  map,
  retry,
  retryWhen,
  tap,
} from 'rxjs/operators';
import { SubSink } from 'subsink';
import { DemoService } from '../../demo-base/demo.service';
import { VouchersService } from '../voucher.service';

@Component({
  selector: 'app-err-handling',
  templateUrl: './err-handling.component.html',
  styleUrls: ['./err-handling.component.scss'],
})
export class ErrHandlingComponent implements OnInit {
  constructor(private vs: VouchersService, private ds: DemoService) {}

  sub: SubSink = new SubSink();

  ngOnInit() {}

  whereToHandle() {
    // handle exceptions here???
    const obs = of('cleo', 'flora', 'giro', 'soi', 3).pipe(
      map((name: string) => {
        return name.toUpperCase();
      }),
      catchError((err) => {
        console.log('handled in catchError', err);
        return of('');
      })
    );

    // or here???
    obs.subscribe(
      (val) => console.log(val),
      (err) => console.log('handled in subscribe-error', err)
    );
  }

  // Used in tryCatchAlike
  setLabel = (v) => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  tryCatchAlike() {
    this.sub.sink = this.vs
      .getVouchers()
      .pipe(
        tap((data) => console.log('logged by tap(): ', data)),
        map((vs) => vs.map(this.setLabel)),
        catchError((err) => {
          console.log('Error on getVouchers()', err);
          return throwError('Err happened while processing vouchers');
        }),
        finalize(() => console.log('finalizing ...'))
      )
      .subscribe((data) => console.log('tryCatchAlike result', data));
  }

  fallbackValue() {
    this.sub.sink = this.ds
      .getItems()
      .pipe(
        catchError((err) => {
          console.log('caught mapping error and rethrowing', err);
          return throwError(err);
        }),
        finalize(() => console.log('first finalize() block executed')),
        catchError((err) => {
          console.log('caught rethrown error, providing fallback value', err);
          return of([
            {
              url: 'langfeatures',
              topicid: 2,
              title: 'Language Features',
              component: 'LangFeaturesComponent',
              visible: true,
              sortOrder: 1,
            },
            {
              url: 'creating',
              topicid: 2,
              title: 'Creating Observables',
              component: 'CreatingObservableComponent',
              visible: true,
              sortOrder: 2,
            },
          ]);
        }),
        finalize(() => console.log('second finalize() block executed'))
      )
      .subscribe(
        (res) => console.log('HTTP response', res),
        (err) => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }

  useRetry() {
    let thrown = false;

    const fakeTimeout = (data) => {
      if (!thrown) {
        thrown = true;
        console.log('catch err');
        throw new Error('Error, timeout');
      }
    };

    const obs = of(['cleo', 'soi', 'giro']).pipe(tap(fakeTimeout), retry(1));

    obs.subscribe(
      (v) => console.log(v),
      (e) => console.error(e)
    );
  }

  useRetryWhen() {
    interval(1000)
      .pipe(
        map((val) => {
          if (val > 2) throw new Error('Invalid Value');
          return val;
        }),
        retryWhen((error) =>
          error.pipe(
            tap(() => console.log('error occurred ')),
            delay(2000),
            tap(() => console.log('Retrying ...'))
          )
        )
      )
      .subscribe(
        (val) => console.log(val),
        (err) => console.log(err),
        () => console.log('Complete')
      );
  }
}
