import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSelectorsComponent } from './ngrx-selectors.component';

describe('NgrxSelectorsComponent', () => {
  let component: NgrxSelectorsComponent;
  let fixture: ComponentFixture<NgrxSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxSelectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
