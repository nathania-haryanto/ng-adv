Examine the mockstore.component.spec.ts.spec files in /ngrx-mockstore.

It uses the MockStore to test the mockstore.component.ts. You can copy initial state from the Redux Dev Tools if you are using an advanced data structure like a Map when use EntityAdapter.

```typescript
beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [MockstoreComponent],
        providers: [provideMockStore({ initialState })]
    }).compileComponents();
});
```