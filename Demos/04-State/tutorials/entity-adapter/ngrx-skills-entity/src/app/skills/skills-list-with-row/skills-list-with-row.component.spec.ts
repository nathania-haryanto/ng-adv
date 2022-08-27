import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListWithRowComponent } from './skills-list-with-row.component';

describe('SkillsListWithRowComponent', () => {
  let component: SkillsListWithRowComponent;
  let fixture: ComponentFixture<SkillsListWithRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsListWithRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsListWithRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
