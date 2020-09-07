import { of } from 'rxjs';
import { SimpleFoodComponent } from './simple-food.component';
import { FoodItem } from '../../food/food.model';

describe('Component - Spy - FoodComponent:', () => {
  let comp: SimpleFoodComponent;

  const foodData: FoodItem[] = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
    { name: 'Cordon Bleu', rating: 2 },
  ];
  let mockFS;

  const serviceResult = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
  ];

  beforeEach(() => {});

  it('removes the item from the list', () => {
    // in real life this would happen in beforeEach
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    comp = new SimpleFoodComponent(mockFS);

    comp.food = foodData;
    mockFS.deleteItem.and.returnValue(of(serviceResult));
    comp.deleteFood(foodData[3]);

    expect(comp.food.length).toBe(3);
  });

  it('should call deleteItem', () => {
    // in real life this would happen in beforeEach
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    comp = new SimpleFoodComponent(mockFS);

    comp.food = foodData;
    mockFS.deleteItem.and.returnValue(of(serviceResult));

    comp.deleteFood(foodData[3]);
    expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
  });
});
