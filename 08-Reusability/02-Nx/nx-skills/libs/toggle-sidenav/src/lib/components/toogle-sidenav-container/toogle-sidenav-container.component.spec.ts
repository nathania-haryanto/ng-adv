import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleSidenavContainerComponent } from './toogle-sidenav-container.component';

describe('ToogleSidenavContainerComponent', () => {
  let component: ToogleSidenavContainerComponent;
  let fixture: ComponentFixture<ToogleSidenavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleSidenavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
