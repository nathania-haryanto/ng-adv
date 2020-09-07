import { cold } from 'jasmine-marbles';
import { map, tap } from 'rxjs/operators';

describe('Marbles - Operators', () => {
  it('Should multiply by "2" each value emitted', () => {
    const sourceVals = { a: 1, b: 2, c: 3 };
    const source = cold('-a-b-c-|', sourceVals);

    // this is the operation to be tested
    const result = source.pipe(
      map((x) => x * 2),
      tap(console.log)
    );

    const expectedVals = { a: 2, b: 4, c: 6 };
    const expected = cold('-a-b-c-|', expectedVals);

    expect(result).toBeObservable(expected);
  });
});
