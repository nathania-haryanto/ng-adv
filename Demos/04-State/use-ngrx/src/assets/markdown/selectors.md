- Explain `app.selector.ts` and its selectors

```javascript
export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getIsMockAuthenticated = createSelector(
  getAppState,
  (state: AppState) => state.IsMockAuthenticated
);
```

- Hook the state to a component:

```javascript
export class SelectorsComponent {
  constructor(private state: Store<AppState>) {}

  isMockAuthenticated = this.state.select(getIsMockAuthenticated);

  toggleAuth() {
    this.state.dispatch(toggleMockAuthenticated());
  }
}
```