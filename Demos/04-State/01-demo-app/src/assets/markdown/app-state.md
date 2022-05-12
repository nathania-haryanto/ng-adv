- Examine root state in /app/state/*
- Show [Chrome Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=de). Mention that the browser has to be restarted after installation
- A good live-demo would be to refactor the loading indicator to ngrx

```typescript
export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};
```

Explain Action Creators and  the other artifacts:

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
Explain the reducer:

```typescript
export const appReducer = createReducer(
  initialAppState,
  on(changeTitle, (state, action) => {
    return { ...state, title: action.title };
  }),
  on(toggleSideNav, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
...
```