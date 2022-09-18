import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorRefComponent } from './change-detector-ref.component';

describe('ChangeDetectorRefComponent', () => {
  let component: ChangeDetectorRefComponent;
  let fixture: ComponentFixture<ChangeDetectorRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectorRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectorRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
