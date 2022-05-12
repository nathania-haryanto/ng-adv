Investigate root state in /app/state/

```typescript
export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};
```

and it's actions that toggle the side nav:

```typescript
import { createAction, props } from '@ngrx/store';

export const changeTitle = createAction(
  '[App] changeTitle',
  props<{ title: string }>()
);

export const setSideNavEnabled = createAction(
  '[Menu] changeSideNavEnabled',
  props<{ enabled: boolean }>()
);

export const toggleSideNav = createAction('[Menu] toggleSideNavVisible');
```