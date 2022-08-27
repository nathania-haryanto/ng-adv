import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRowComponent } from './skill-row.component';

describe('SkillRowComponent', () => {
  let component: SkillRowComponent;
  let fixture: ComponentFixture<SkillRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
