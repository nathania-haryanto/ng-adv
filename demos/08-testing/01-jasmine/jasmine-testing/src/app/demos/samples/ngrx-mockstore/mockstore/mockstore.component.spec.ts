import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { mockstore } from './mock.data';
import { MockstoreComponent } from './mockstore.component';
import { DemoState } from '../../../state/demos.reducer';


describe('MockstoreComponent', () => {
  let component: MockstoreComponent;
  let fixture: ComponentFixture<MockstoreComponent>;
  let mockStore: MockStore<DemoState>;
  const initialState = mockstore; // just to point to the import - could be used directly

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockstoreComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    fixture = TestBed.createComponent(MockstoreComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 2 demos', () => {
    component.demos.subscribe(demos => {
      expect(demos.length).toBe(2);
    });
  });
});
