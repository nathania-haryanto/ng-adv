import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxMockSelectorsComponent } from './ngrx-mock-selectors.component';

describe('NgrxMockSelectorsComponent', () => {
  let component: NgrxMockSelectorsComponent;
  let fixture: ComponentFixture<NgrxMockSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxMockSelectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxMockSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
