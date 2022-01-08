import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MockStoreComponent } from './mock-store.component';

describe('MockStore - Component', () => {
  let component: MockStoreComponent;
  let fixture: ComponentFixture<MockStoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MockStoreComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
