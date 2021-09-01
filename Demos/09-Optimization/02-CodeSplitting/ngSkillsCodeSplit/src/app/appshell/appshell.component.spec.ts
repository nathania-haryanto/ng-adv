import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppshellComponent } from './appshell.component';

describe('AppshellComponent', () => {
  let component: AppshellComponent;
  let fixture: ComponentFixture<AppshellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
