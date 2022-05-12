import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicThemingComponent } from './classic-theming.component';

describe('ClassicThemingComponent', () => {
  let component: ClassicThemingComponent;
  let fixture: ComponentFixture<ClassicThemingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicThemingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
