Investigate root state and it's actions:

```
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

export const changeSideNavVisible = createAction(
  '[Menu] changeSideNavVisible',
  props<{ visible: boolean }>()
);

export const changeSideNavPosition = createAction(
  '[Menu] changeSideNavPosition',
  props<{ position: string }>()
);
```