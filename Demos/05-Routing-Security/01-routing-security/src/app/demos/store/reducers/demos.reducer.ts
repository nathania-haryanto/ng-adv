import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';
import { DemoItem } from '../../demo-item.model';
import { DemosActionsUnion, DemosActionTypes } from '../actions/demos.actions';

// State

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
    topicid: 1,
  },
};

export const initialState = demosAdapter.getInitialState(defaultDemoItemState);

//Reducer

export function DemosReducer(
  state: DemoState = initialState,
  action: DemosActionsUnion
): DemoState {
  switch (action.type) {
    case DemosActionTypes.LoadDemosSuccess: {
      return demosAdapter.addAll(action.payload, {
        ...state,
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
        changes: { visible: action.payload.visible },
      };
      return demosAdapter.updateOne(item, { ...state });
    }
    default:
      return state;
  }
}
