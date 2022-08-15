import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadesComponent } from './facades.component';

describe('FacadesComponent', () => {
  let component: FacadesComponent;
  let fixture: ComponentFixture<FacadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
