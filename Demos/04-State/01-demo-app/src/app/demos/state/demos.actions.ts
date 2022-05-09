import { createAction, props } from '@ngrx/store';
import { DemoItem } from '../demo-base/demo-item.model';

export const loadDemos = createAction('[Demos] loadDemos');

export const loadDemosSuccess = createAction(
  '[Demos] loadDemos Success',
  props<{ items: DemoItem[] }>()
);

export const loadDemosFailure = createAction(
  '[Demos] loadDemos Failure',
  props<{ err: Error }>()
);

export const deleteDemo = createAction(
  '[Demos] deleteDemo',
  props<{ item: DemoItem }>()
);

export const deleteDemoSuccess = createAction(
  '[Demos] deleteDemo Success',
  props<{ item: DemoItem }>()
);

export const deleteDemoFailure = createAction(
  '[Demos] deleteDemo Failure',
  props<{ err: Error }>()
);

export const toggleVisiblity = createAction(
  '[Demos] toggleVisiblity',
  props<{ item: DemoItem }>()
);

export const setSelected = createAction(
  '[Demos] setSelected',
  props<{ item: DemoItem }>()
);

export const applyFilter = createAction(
  '[Demos] applyFilter',
  props<{ filter: string }>()
);
