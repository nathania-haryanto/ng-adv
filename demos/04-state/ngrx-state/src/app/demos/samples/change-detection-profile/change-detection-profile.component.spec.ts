import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionProfileComponent } from './change-detection-profile.component';

describe('ChangeDetectionProfileComponent', () => {
  let component: ChangeDetectionProfileComponent;
  let fixture: ComponentFixture<ChangeDetectionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
