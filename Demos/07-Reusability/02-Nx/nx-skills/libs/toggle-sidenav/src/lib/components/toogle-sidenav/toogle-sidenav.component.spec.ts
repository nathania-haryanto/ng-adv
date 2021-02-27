import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleSidenavComponent } from './toogle-sidenav.component';

describe('ToogleSidenavComponent', () => {
  let component: ToogleSidenavComponent;
  let fixture: ComponentFixture<ToogleSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
