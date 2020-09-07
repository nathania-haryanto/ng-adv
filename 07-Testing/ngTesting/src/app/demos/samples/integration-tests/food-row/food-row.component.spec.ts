import { FoodRowComponent } from './food-row.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, ElementRef } from '@angular/core';
import { RatingPipe } from '../../pipe/rating.pipe';
import { By } from '@angular/platform-browser';

describe('Component -Integration Test - Food Row', () => {
  let fixture: ComponentFixture<FoodRowComponent>;
  let component: FoodRowComponent;
  let deleteFld: ElementRef;
  let editFld: ElementRef;

  const food = { name: 'Pad Thai', rating: 5 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRowComponent, RatingPipe],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FoodRowComponent);
    component = fixture.componentInstance;
    deleteFld = fixture.debugElement.query(By.css('#deleteFld'));
    editFld = fixture.debugElement.query(By.css('#editFld'));

    fixture.componentInstance.food = food;
    fixture.detectChanges();
  });

  // Does it make sense to test this?
  it('should have the correct food item', () => {
    expect(fixture.componentInstance.food.name).toEqual('Pad Thai');
  });

  // Test for component rendering
  it('should render the food name', () => {
    // Do one of the tests below
    expect(
      fixture.nativeElement.querySelector('#itemName').textContent
    ).toContain('Pad Thai');

    expect(
      fixture.debugElement.query(By.css('#itemName')).nativeElement.textContent
    ).toContain('Pad Thai');
  });

  it('should trigger delete', () => {
    expect(deleteFld).toBeTruthy();

    spyOn(component.delete, 'emit');
    deleteFld.nativeElement.click();
    expect(component.delete.emit).toHaveBeenCalled();
  });

  it('should trigger edit', () => {
    expect(editFld).toBeTruthy();

    spyOn(component.edit, 'emit');
    component.editFood();
    expect(component.edit.emit).toHaveBeenCalledWith(food);
  });
});
