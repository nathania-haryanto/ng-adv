import * as appActions from './app.actions';
import { initialAppState, appReducer, AppState } from './app.reducer';

describe('App Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'NOOP' } as any;
    const result = appReducer(initialAppState, action);
    expect(result).toBe(initialAppState);
  });

  it('should change the title', () => {
    const action = appActions.changeTitle({ title: 'Test Title' });
    const result = appReducer(initialAppState, action);
    expect(result.title).toEqual('Test Title');
  });

  it('should toggle the mock authenticated flag', () => {
    const action = appActions.toggleMockAuthenticated();
    const result = appReducer(initialAppState, action);
    expect(result.IsMockAuthenticated).toEqual(true);
  });

  it('should toggle the side nav visible flag', () => {
    const action = appActions.toggleSideNav();
    const result = appReducer(initialAppState, action);
    expect(result.sideNavVisible).toEqual(false);
  });

  it('should set the side nav enabled flag', () => {
    const action = appActions.setSideNavEnabled({ enabled: false });
    const result = appReducer(initialAppState, action);
    expect(result.sideNavEnabled).toEqual(false);
  });

  it('should change the side nav visible flag', () => {
    const action = appActions.changeSideNavVisible({ visible: false });
    const result = appReducer(initialAppState, action);
    expect(result.sideNavVisible).toEqual(false);
  });

  it('should change the side nav position', () => {
    const action = appActions.changeSideNavPosition({ position: 'over' });
    const result = appReducer(initialAppState, action);
    expect(result.sideNavPosition).toEqual('over');
  });
});
