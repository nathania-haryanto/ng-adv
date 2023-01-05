import { createReducer, on } from '@ngrx/store';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  changeTitle,
  setSideNavEnabled,
  toggleMockAuthenticated,
  toggleSideNav,
} from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  title: string;
  sideNavEnabled: boolean;
  sideNavVisible: boolean;
  sideNavPosition: string;
  IsMockAuthenticated: boolean;
}

export const initialAppState: AppState = {
  title: 'Advanced Angular Development',
  sideNavEnabled: true,
  sideNavVisible: true,
  sideNavPosition: 'side',
  IsMockAuthenticated: false,
};

export const appReducer = createReducer(
  initialAppState,
  on(changeTitle, (state, action) => {
    return { ...state, title: action.title };
  }),
  on(toggleMockAuthenticated, (state, action) => {
    return { ...state, IsMockAuthenticated: !state.IsMockAuthenticated };
  }),
  on(toggleSideNav, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
  on(setSideNavEnabled, (state, action) => ({
    ...state,
    sideNavEnabled: action.enabled,
    sideNavVisible: action.enabled,
  })),
  on(changeSideNavVisible, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
  on(changeSideNavPosition, (state, action) => ({
    ...state,
    sideNavPosition: action.position,
  }))
);
