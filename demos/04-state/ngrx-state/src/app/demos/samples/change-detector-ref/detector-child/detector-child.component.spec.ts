import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorChildComponent } from './detector-child.component';

describe('DetectorChildComponent', () => {
  let component: DetectorChildComponent;
  let fixture: ComponentFixture<DetectorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectorChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
