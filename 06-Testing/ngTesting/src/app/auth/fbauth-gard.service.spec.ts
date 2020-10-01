import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthState } from './store/reducers/auth.reducer';
import { FBAuthGuard } from './fbauth-guard.service';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

describe('MockStore - Auth Guard', () => {
  let guard: FBAuthGuard;
  let store: MockStore<AuthState>;

  const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FBAuthGuard, provideMockStore({ initialState })],
    });

    // Cast because of this issue: https://github.com/ngrx/platform/issues/2362
    store = TestBed.inject(Store) as MockStore<any>;
    guard = TestBed.inject(FBAuthGuard);
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });

    expect(guard.canLoad()).toBeObservable(expected);
  });

  // TODO: Uncomment to show Mock store test

  // Now this would lead to mocking of Firebase Users
  // There is a lib for this but ...
  // Honestly speaking ... too much for this class

  // it('should return true if the user state is logged in', () => {
  //   store.setState({
  //     user: {},
  //     token: null,
  //     isLoggedIn: false,
  //   });
  //   const expected = cold('(a|)', { a: true });
  //   expect(guard.canLoad()).toBeObservable(expected);
  // });
});
