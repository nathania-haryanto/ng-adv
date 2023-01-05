import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPresenterNgrxComponent } from './container-presenter-ngrx.component';

describe('ContainerPresenterNgrxComponent', () => {
  let component: ContainerPresenterNgrxComponent;
  let fixture: ComponentFixture<ContainerPresenterNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPresenterNgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPresenterNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
