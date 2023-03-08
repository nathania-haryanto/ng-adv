import { createReducer, on } from '@ngrx/store';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  setSideNavEnabled,
  toggleSideNav,
} from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  sideNavEnabled: boolean;
  sideNavVisible: boolean;
  sideNavPosition: string;
}

export const initialAppState: AppState = {
  sideNavEnabled: true,
  sideNavVisible: true,
  sideNavPosition: 'side',
};

export const appReducer = createReducer(initialAppState,
    on(changeSideNavPosition, (state, action) => ({...state, sideNavPosition: action.position})),
    on(changeSideNavVisible, (state,action) => ({...state, sideNavVisible: action.visible})),
    on(setSideNavEnabled, (state, action) => ({...state, sideNavEnabled: action.enabled})),
    on(toggleSideNav, (state) => ({...state, sideNavVisible: !state.sideNavVisible}))
)