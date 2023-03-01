import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxReducersComponent } from './ngrx-reducers.component';

describe('NgrxReducersComponent', () => {
  let component: NgrxReducersComponent;
  let fixture: ComponentFixture<NgrxReducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxReducersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxReducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
