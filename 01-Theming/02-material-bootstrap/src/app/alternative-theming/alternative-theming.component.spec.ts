import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeThemingComponent } from './alternative-theming.component';

describe('AlternativeThemingComponent', () => {
  let component: AlternativeThemingComponent;
  let fixture: ComponentFixture<AlternativeThemingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeThemingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
