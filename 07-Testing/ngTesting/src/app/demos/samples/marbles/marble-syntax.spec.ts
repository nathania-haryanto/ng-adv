import { cold, hot } from 'jasmine-marbles';
import { of } from 'rxjs';

describe('Marbles - Basic Syntax', () => {
  it('should understand marble diagram', () => {
    const source = cold('--');
    const expected = cold('--');

    expect(source).toBeObservable(expected);
  });

  describe('cold observable', () => {
    it('should support basic string values', () => {
      const source = cold('-a-|');
      const expected = cold('-a-|');

      expect(source).toBeObservable(expected);
    });

    it('should support basic values provided as params (number)', () => {
      const source = cold('-a-|', { a: 1 });
      const expected = cold('-a-|', { a: 1 });

      expect(source).toBeObservable(expected);
    });

    it('should support basic values provided as params (object)', () => {
      const source = cold('-a-|', { a: { key: 'value' } });
      const expected = cold('-a-|', { a: { key: 'value' } });

      expect(source).toBeObservable(expected);
    });

    it('should support basic values provided as params (object)', () => {
      const source = cold('-a-|', { a: { key: 'value' } });
      const expected = cold('-a-|', { a: { key: 'value' } });

      expect(source).toBeObservable(expected);
    });

    it('should support basic errors', () => {
      const source = cold('--#');
      const expected = cold('--#');

      expect(source).toBeObservable(expected);
    });

    it('should support custom errors', () => {
      const source = cold('--#', null, new Error('Oops!'));
      const expected = cold('--#', null, new Error('Oops!'));

      expect(source).toBeObservable(expected);
    });

    it('should support multiple emission in the same time frame', () => {
      const source = of(1, 2, 3);
      const expected = cold('(abc|)', { a: 1, b: 2, c: 3 });

      expect(source).toBeObservable(expected);
    });
  });

  describe('hot observable', () => {
    it('should support basic hot observable', () => {
      const source = hot('-^a-|', { a: 5 });
      const expected = cold('-a-|', { a: 5 });

      expect(source).toBeObservable(expected);
    });

    // it('should support testing subscriptions', () => {
    //   const source = hot('-a-^b---c-|');
    //   const subscription = '^------!';
    //   const expected = cold('-b---c-|');

    //   expect(source).toBeObservable(expected);
    //   expect(source).toHaveSubscriptions(subscription);
    // });
  });
});
