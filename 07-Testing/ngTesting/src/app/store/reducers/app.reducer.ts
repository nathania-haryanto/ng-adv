import { AppActions, AppActionTypes } from '../actions/app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  title: string;
  sideNav: { Enabled: boolean; Visible: boolean; Position: string };
}

export const initialAppState: AppState = {
  title: 'Advanced Angular Development',
  sideNav: { Enabled: true, Visible: true, Position: 'over' },
};

export function AppReducer(
  state: AppState = initialAppState,
  action: AppActions
) {
  switch (action.type) {
    case AppActionTypes.ChangeTitle:
      return { ...state, title: action.payload };
    case AppActionTypes.SetSideNavEnabled:
      return {
        ...state,
        sideNavEnabled: action.payload,
        sideNavVisible: action.payload,
      };
    case AppActionTypes.ToggleSideNavVisible:
      return {
        ...state,
        sideNav: { ...state.sideNav, Visible: !state.sideNav.Visible },
      };
    case AppActionTypes.ChangeSideNavVisible:
      return {
        ...state,
        sideNav: { ...state.sideNav, Visible: action.payload },
      };
    case AppActionTypes.ChangeSideNavPosition:
      return {
        ...state,
        sideNav: { ...state.sideNav, Position: action.payload },
      };
    default:
      return state;
  }
}
