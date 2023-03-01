- Examine `food/food.service.ts` and `food/food.service.spec.ts` and its http injection and the use of HttpClientTestingModule and HttpTestingController.

- Http-tests can be used to test the service and the http calls, especially when the service is doing some processing on the data like in getAvailableFood().

```typescript
export class FoodService {
  constructor(private httpClient: HttpClient) { }

  getFood() {
    return this.httpClient.get<FoodItem[]>(`${environment.apiUrl}food`)
  }

  getAvailableFood() {
    return from(this.getFood()).pipe(
      map((items) => items.filter((item) => item.discontinued !== true)
      ))
  }
}
```