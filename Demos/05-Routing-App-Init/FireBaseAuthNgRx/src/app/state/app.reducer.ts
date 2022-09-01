import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Customer } from '../app-init/customer.model';
import { loadCustomersSuccess } from './customers.actions';
import { User } from '../user/user.model';
import { toggleLoggedIn, togglePrimeMember } from './app.actions';

export const appFeatureKey = 'app';

export interface AppState extends EntityState<Customer> {
  title: string;
  user: User;
}

export const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>();

export const initialAppState: AppState = customerAdapter.getInitialState({
  title: 'Advanced Angular Development',
  user: { name: 'Giro the Galgo', isLoggedIn: false, isPrimeMember: false },
});

export const appReducer = createReducer(
  initialAppState,
  on(loadCustomersSuccess, (state, action) => {
    return customerAdapter.setAll(action.items, { ...state });
  }),
  on(toggleLoggedIn, (state, action) => {
    return {
      ...state,
      user: { ...state.user, isLoggedIn: !state.user.isLoggedIn },
    };
  }),
  on(togglePrimeMember, (state, action) => {
    return {
      ...state,
      user: { ...state.user, isPrimeMember: !state.user.isPrimeMember },
    };
  })
);
