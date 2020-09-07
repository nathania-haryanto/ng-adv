import { MockAuthComponent } from './mock-auth.component';

class MockAuthService {
  isAuth = true;

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  logIn() {
    this.isAuth = true;
  }

  logOff() {
    this.isAuth = false;
  }
}

describe('Component - Mock', () => {
  let component: MockAuthComponent;

  const mockservice = new MockAuthService();

  beforeEach(() => {
    component = new MockAuthComponent(mockservice);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Authenticated true', () => {
    expect(component.loggedIn).toBe(true);
  });
});
