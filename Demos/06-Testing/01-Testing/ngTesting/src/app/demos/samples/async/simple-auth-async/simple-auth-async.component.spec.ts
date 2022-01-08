import { of } from 'rxjs';
import { SimpleAuthService } from '../simple-auth.service';
import { SimpleAuthAsyncComponent } from './simple-auth-async.component';

// Problems with sync test
describe('Component - AsyncTest - Login - Symetric Test', () => {
  let component: SimpleAuthAsyncComponent;
  let service: SimpleAuthService;

  beforeEach(() => {
    service = new SimpleAuthService();
    component = new SimpleAuthAsyncComponent(service);
  });

  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345');
    // Uncomment this later
    // expect(component.needsLogin).toBeFalsy();
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });
});

describe('Component - Spy - Login', () => {
  let component: SimpleAuthAsyncComponent;
  let service: SimpleAuthService = new SimpleAuthService();
  let spy: any;

  beforeEach(() => {
    service = new SimpleAuthService();
    component = new SimpleAuthAsyncComponent(service);
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(of(false));
    expect(component.needsLogin).toBeTruthy();
    // When performing testing we need to call component lifecycle hooks ourselves
    component.ngOnInit();
    expect(service.isAuthenticated).toHaveBeenCalled();
    expect(component.needsLogin).toBe(true);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });
});
