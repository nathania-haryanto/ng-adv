import { AddDemo, SetSelected } from '../actions/demos.actions';
import { DemosReducer, initialState } from './demos.reducer';

describe('NgRx - Reducer - Demos Reducer', () => {
  it('should return the previous state when an invalid action is passed', () => {
    const action = { type: 'Invalid' } as any;
    const result = DemosReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should set an item as selected', () => {
    const item = {
      url: 'unittesting',
      title: 'Into Unit Testing',
      component: 'UnitTestingComponent',
      id: 1,
      topicid: 1,
      visible: true,
      sortOrder: 0,
    };

    const desired = {
      entities: {},
      filter: '',
      ids: [],
      selected: {
        component: 'UnitTestingComponent',
        id: 1,
        sortOrder: 0,
        title: 'Into Unit Testing',
        topicid: 1,
        url: 'unittesting',
        visible: true,
      },
    };

    const action = new SetSelected(item);
    const result = DemosReducer(initialState, action);

    expect(result).toEqual(desired);
  });

  it('should return a new state with the added item', () => {
    const item = {
      url: 'unittesting',
      title: 'Into Unit Testing',
      component: 'UnitTestingComponent',
      id: 1,
      topicid: 1,
      visible: true,
      sortOrder: 0,
    };

    const designated = {
      1: {
        url: 'unittesting',
        title: 'Into Unit Testing',
        component: 'UnitTestingComponent',
        id: 1,
        topicid: 1,
        visible: true,
        sortOrder: 0,
      },
    };

    const action = new AddDemo(item);
    const result = DemosReducer(initialState, action);
    expect(result.entities).toEqual(designated);
  });
});
