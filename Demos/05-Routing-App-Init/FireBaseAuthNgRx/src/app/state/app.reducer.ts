import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Customer } from '../app-init/customer.model';
import { loadCustomersSuccess } from './customers.actions';

export const appFeatureKey = 'app';

export interface AppState extends EntityState<Customer> {
  title: string;
}

export const initialAppState: AppState = {
  ids: [],
  entities: {},
  title: 'Advanced Angular Development',
};

export const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>();

export const appReducer = createReducer(
  initialAppState,
  on(loadCustomersSuccess, (state, action) => {
    return customerAdapter.setAll(action.items, { ...state });
  })
);
