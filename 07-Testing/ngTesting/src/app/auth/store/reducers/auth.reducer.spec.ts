import { AuthReducer, initialState } from './auth.reducer';

describe('NgRx - Reducer - AuthReducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = AuthReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
