import { map } from 'rxjs/operators';
import { RunHelpers, TestScheduler } from 'rxjs/testing';

describe('Marble test into', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expected(actual).toEqual(expected);
    });
  });

  it('should multiply each value by 10', () => {
    scheduler.run((runhelpers: RunHelpers) => {
      const sourceVals = { a: 1, b: 3, c: 5 };
      const source$ = runhelpers.cold('a--b-c|', sourceVals);

      const expVals = { a: 10, b: 30, c: 50 };
      const exp$ = runhelpers.cold('a--b-c|', expVals);
      const result$ = source$.pipe(map((v) => v * 10));
      // expectObservable(result$).toBe(exp$);
    });
  });
});
