Navigate to folder `\demos\samples\simple-tests`

Investigate `simple-class.ts` and `simple-class.spec.ts`

Notice the First Test:

```typescript
it('contains 12 charactes', function () {
  expect(SimpleClass.sayHelloWorld().length).toEqual(12);
});
```

Run the Test using `ng test`

Also look at `voucher-validator.ts` and `voucher-validator.spec.ts`
