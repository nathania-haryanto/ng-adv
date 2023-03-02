import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { DemoState } from '../../../state/demos.reducer';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { mockselectorData } from './mockselector.data';

import { SelectorsComponent } from './selectors.component';

describe('SelectorsComponent', () => {
  let component: SelectorsComponent;
  let fixture: ComponentFixture<SelectorsComponent>;
  let mockStore: MockStore<DemoState>;
  const initialState = mockselectorData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorsComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectorsComponent);
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
