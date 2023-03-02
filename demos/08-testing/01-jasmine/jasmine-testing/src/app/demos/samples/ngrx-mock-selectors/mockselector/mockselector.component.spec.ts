import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockselectorComponent } from './mockselector.component';
import { DemoState } from '../../../state/demos.reducer';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { mockselectorData } from './mockselector.data';

describe('MockselectorComponent', () => {
  let component: MockselectorComponent;
  let fixture: ComponentFixture<MockselectorComponent>;
  let mockStore: MockStore<DemoState>;
  let mockSelector: MemoizedSelector<object, DemoItem[]>;
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

  it('should have a list of 1 demos', () => {
    component.demos.subscribe(demos => {
      expect(demos.length).toBe(1);
    });
  });
});
