import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MockselectorComponent } from './mockselector.component';
import { mockselectorData } from './mockselector.data';
import { DemoState } from '../../../state/demos.reducer';

describe('MockselectorComponent', () => {
  let component: MockselectorComponent;
  let fixture: ComponentFixture<MockselectorComponent>;
  let mockStore: MockStore<DemoState>;
  const initialState = mockselectorData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockselectorComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MockselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 2 demos', () => {
    component.demos.subscribe(demos => {
      expect(demos.length).toBe(1);
    });
  });
});
