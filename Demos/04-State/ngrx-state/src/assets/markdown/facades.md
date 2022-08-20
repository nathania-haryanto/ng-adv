- Facades which is basicalla a service, allow you to use NgRx in Components just like Stateful Services. 

```typescript
@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  constructor(private state: Store<AppState>) {}

  getIsMockAuthenticated() {
    return this.state.select(getIsMockAuthenticated);
  }

  toggleAuth() {
    this.state.dispatch(toggleMockAuthenticated());
  }
}
```
- At the same time you decouple your NgRx implementation from the component.

- You can have more than one Facade for a state
