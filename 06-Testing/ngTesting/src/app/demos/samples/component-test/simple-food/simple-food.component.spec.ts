import { of } from 'rxjs';
import { foodData, serviceResult } from './simple-food-component.data';
import { SimpleFoodComponent } from './simple-food.component';

describe('Component - Spy - FoodComponent:', () => {
  let comp: SimpleFoodComponent;
  let fs;

  beforeEach(() => {});

  it('removes the item from the list', () => {
    // in real life this would happen in beforeEach
    fs = jasmine.createSpyObj(['getItems', 'deleteItem']);
    comp = new SimpleFoodComponent(fs);

    comp.food = foodData;
    fs.deleteItem.and.returnValue(of(serviceResult));
    comp.deleteFood(foodData[3]);

    expect(comp.food.length).toBe(3);
  });

  it('should call deleteItem', () => {
    // in real life this would happen in beforeEach
    fs = jasmine.createSpyObj(['getItems', 'deleteItem']);
    comp = new SimpleFoodComponent(fs);

    comp.food = foodData;
    fs.deleteItem.and.returnValue(of(serviceResult));

    comp.deleteFood(foodData[3]);
    expect(fs.deleteItem).toHaveBeenCalledWith(foodData[3]);
  });
});
