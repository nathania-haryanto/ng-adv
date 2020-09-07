import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { FBAuthGuard } from '../../fbauth-guard.service';
import { AuthModule } from '../../auth.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MockStore - FirebaseAuthGuard', () => {
  let guard: FBAuthGuard;
  let store: MockStore<{ isLoggedIn: boolean }>;
  const initialState = {
    isLoggedIn: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        FBAuthGuard,
        provideMockStore({ initialState }),
        // other providers
      ],
    });

    store = TestBed.get(Store);
    guard = TestBed.get(FBAuthGuard);
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });

    expect(guard.canLoad()).toBeObservable(expected);
  });

  // TODO: Mock Store isLoggedIn

  // it('should return true if the user state is logged in', () => {
  //   store.setState({ isLoggedIn: true });

  //   const expected = cold('(a|)', { a: true });

  //   expect(guard.canLoad()).toBeObservable(expected);
  // });
});
