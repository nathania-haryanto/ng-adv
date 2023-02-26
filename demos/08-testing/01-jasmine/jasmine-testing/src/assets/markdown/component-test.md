Navigate to folder `\demos\component-test\simple-food`: Investigate `simple-food.component.ts` & and `simple-food.component.spec.ts`

Navigate to folder `\demos\foodService\`: `food.service.ts`

Notice that whe are using `jasmine.createSpyObj()` to mock an Object and fake it's result using `.and.returnValue`:

```typescript
beforeEach(() => {
  mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
  comp = new FoodComponent(mockFS);
});
```

```typescript
mockFS.deleteItem.and.returnValue(of(serviceResult));
```

We are also testing for the Component Interaction with the service:

```typescript
expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
```
