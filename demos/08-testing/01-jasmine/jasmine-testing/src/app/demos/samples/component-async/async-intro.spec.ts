import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Async Testing Examples', () => {
  it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it('fakeAsync Makrotask', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
    });
    setTimeout(() => {
      console.log('running assertions setTimeout()');
      test = true;
    }, 1000);
    flush();
    expect(test).toBeTruthy();
  }));

  it('fake Async - Promise (Microtask)', fakeAsync(() => {
    let test = false;
    Promise.resolve().then(() => {
      console.log('Promise then() evaluated successfully');
      return Promise.resolve();
    })
      .then(() => {
        console.log('Nested Promise then() evaluated successfully');
        test = true;
      });
    flushMicrotasks();
    console.log('Running test assertions');
    expect(test).toBeTruthy();
  }));

  it('fake Async - Promises & Makrotasks', fakeAsync(() => {
    let counter = 0;
    Promise.resolve()
      .then(() => {
        counter += 10;
        setTimeout(() => {
          counter += 1;
        }, 1000);
      });

    flushMicrotasks();
    expect(counter).toBe(10);
    tick(1000);
    expect(counter).toBe(11);
  }));

  it('fakeAsync - Observables', fakeAsync(() => {
    let test = false;
    const test$ = of(test).pipe(delay(1000));
    test$.subscribe(() => {
      test = true;
    });

    tick(1000);
    console.log('Running test assertions');
    expect(test).toBe(true);
  }));
});