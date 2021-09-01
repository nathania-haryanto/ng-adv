import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DogDetailComponent } from './dog-detail.component';

describe('DogDetailComponent', () => {
  let component: DogDetailComponent;
  let fixture: ComponentFixture<DogDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
