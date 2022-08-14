- Examine Marble Testing Code in `marble-testing.component.spec.ts`:

```javascript
it('test with operator', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('a--b-c|', { a: 1, b: 3, c: 5 });
      const piperesult$ = source$.pipe(map((v) => v * 10));
      const expected = 'a--b-c|';
      expectObservable(piperesult$).toBe(expected, { a: 10, b: 30, c: 50 });
    });
});
```

![marbles](assets/images/marbles.jpg)

