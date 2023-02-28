import { MockAuthComponent } from './mock-auth.component';
import { AuthService } from '../auth.service';

class MockAuthService extends AuthService {
  protected override isAuth = true;

  override isAuthenticated(): boolean {
    return this.isAuth;
  }

  override logIn() {
    this.isAuth = true;
  }

  override logOff() {
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
