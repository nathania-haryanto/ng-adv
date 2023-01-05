import { createAction, props } from '@ngrx/store';
import { Customer } from '../app-init/customer.model';

export const loadCustomers = createAction('[nameSpace] loadCustomers');

export const loadCustomersSuccess = createAction(
  '[nameSpace] loadCustomers Success',
  props<{ items: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[nameSpace] loadCustomers Failure',
  props<{ err: Error }>()
);
