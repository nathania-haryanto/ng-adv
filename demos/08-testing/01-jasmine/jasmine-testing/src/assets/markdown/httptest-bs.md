- Examine `food/food.service-bs.ts` and `food/food.service--bs.spec.ts` and its http injection and the use of HttpClientTestingModule and HttpTestingController.

- It represents a stateful service that is using a behavior subject to store the data and expose it to the components.


```typescript
@Injectable({
  providedIn: 'root',
})
export class FoodServiceBS {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }
  private items: FoodItem[] = [];
  private Items: BehaviorSubject<FoodItem[]> = new BehaviorSubject(this.items);
```