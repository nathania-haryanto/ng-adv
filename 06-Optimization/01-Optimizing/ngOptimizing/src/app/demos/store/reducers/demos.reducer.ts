import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { DemoItem } from '../../demo-item.model';
import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Update
} from '@ngrx/entity';
import { DemosActionTypes, DemosActions } from '../actions/demos.actions';

//State

export const demosFeatureKey = 'demos';

export interface DemoState extends EntityState<DemoItem> {
  selected: DemoItem;
  filter: string;
}

export const demosAdapter: EntityAdapter<DemoItem> = createEntityAdapter<
  DemoItem
>();

export const defaultDemoItemState: DemoState = {
  ids: [],
  entities: {},
  filter: '',
  selected: {
    id: 0,
    title: '',
    component: '',
    sortOrder: 0,
    visible: true,
    url: '',
    topicid: 1
  }
};

export const initialState = demosAdapter.getInitialState(defaultDemoItemState);

//Selectors

export const getDemoState = createFeatureSelector<DemoState>(demosFeatureKey);

//Note: Selector refactor to use Entity
export const getDemoEntities = createSelector(
  getDemoState,
  demosAdapter.getSelectors().selectAll
);

//Note: Make this structure iterable again for the template
export const getAllDemos = createSelector(
  getDemoEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

//Reducer

export function DemosReducer(
  state: DemoState = initialState,
  action: DemosActions
): DemoState {
  switch (action.type) {
    case DemosActionTypes.LoadDemosSuccess: {
      return demosAdapter.addAll(action.payload, {
        ...state
      });
    }
    case DemosActionTypes.LoadDemosError: {
      return { ...state };
    }
    case DemosActionTypes.DeleteDemoSuccess: {
      let deleted: DemoItem = action.payload;
      return demosAdapter.removeOne(deleted.id, { ...state });
    }
    case DemosActionTypes.DeleteDemoError: {
      return { ...state };
    }
    case DemosActionTypes.SetSelected: {
      return { ...state, selected: action.payload as DemoItem };
    }
    case DemosActionTypes.ToggleVisiblity: {
      let item: Update<DemoItem> = {
        id: action.payload.id,
        changes: { visible: action.payload.visible }
      };
      return demosAdapter.updateOne(item, { ...state });
    }
    default:
      return state;
  }
}
