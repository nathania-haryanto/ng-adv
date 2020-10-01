import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleSidenavMenuComponent } from './toogle-sidenav-menu.component';

describe('ToogleSidenavMenuComponent', () => {
  let component: ToogleSidenavMenuComponent;
  let fixture: ComponentFixture<ToogleSidenavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleSidenavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleSidenavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
