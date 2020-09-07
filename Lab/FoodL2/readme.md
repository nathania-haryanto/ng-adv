# Migrate Stateful Service to NgRx

## Tasks

- Use the guide to get started to migrate to NgRx
- Implement as much functionality as you can using NgRx

## Guide

Installation:

```
npm i @ngrx/store @ngrx/effects @ngrx/entity -S
npm i @ngrx/store-devtools -D
ng add @ngrx/schematics
```

### Scaffolding (Module Sample: ngState)

#### Root

Add Food Data to json-server

```
 "food": [
    { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },
    { "id": 2, "name": "Curry Wurst", "price": 2.7, "calories": 730 },
    { "id": 3, "name": "Blini with Salmon", "price": 8.3, "calories": 600 }
  ]
```

Create Root State & Root actions:

```
 ng g store State --root true --statePath store
```

Add Store to app.module.ts

```typescript
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

...

FoodModule,
StoreModule.forRoot(reducers, {
  metaReducers,
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true
  }
}),
  EffectsModule.forRoot([]),
  !environment.production ? StoreDevtoolsModule.instrument() : [];
```

> Note: Adjust as needed

#### Feature Module

Create Feature State - a: Action, r: Reducer, ef: Effekt

> Note: General Syntax: ng g TYPE PATH/NAME --group

> Path can be PATH/SUBPATH

```
ng g r food/store/food --group
ng g a food/store/food --group
ng g ef food/store/food --group
```

> Note: Rename classes to FoodReducer, FoodState, .... Later you can use abstract names like reducer and use Import Aliases

```typescript
import { Action } from '@ngrx/store';

export const foodFeatureKey = 'food';

export interface FoodState {}

export const initialState: FoodState = {};

export function FoodReducer(state = initialState, action: Action): FoodState {
  switch (action.type) {
    default:
      return state;
  }
}
```

Register Store & Effects in Feature Module:

```
StoreModule.forFeature(foodFeatureKey, FoodReducer),
EffectsModule.forFeature([FoodEffects])]
```

### Use NgRx in Feature Module

Add FoodState to RootState:

```typescript
import { FoodState, FoodReducer } from '../food/store/reducers/food.reducer';

export interface State {
  food: FoodState;
}

export const reducers: ActionReducerMap<State> = {
  food: FoodReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
```

Add Food Actions:

```typescript
import { FoodItem } from '../../food.model';

export enum FoodActionTypes {
  LoadFoods = '[Food] Load Foods',
  LoadFoods_Success = '[Food] LoadFoods_Success',
  LoadFoods_Error = '[Food] LoadFoods_Error',
}

export class LoadFoods implements Action {
  readonly type = FoodActionTypes.LoadFoods;
}

export class LoadFood_Success implements Action {
  readonly type = FoodActionTypes.LoadFoods_Success;
  constructor(public payload: FoodItem[]) {}
}

export class LoadFood_Error implements Action {
  readonly type = FoodActionTypes.LoadFoods_Error;
  constructor(public payload: Error) {}
}

export type FoodActions = LoadFoods | LoadFood_Success | LoadFood_Error;
```

Modify Food Effects:

```typescript
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as foodActions from '../actions/food.actions';
import { FoodItem } from '../../food.model';
import { FoodService } from '../../food.service';

@Injectable()
export class FoodEffects {
  constructor(private actions$: Actions, private fs: FoodService) {}

  @Effect()
  loadFood$: Observable<Action> = this.actions$.pipe(
    ofType(foodActions.FoodActionTypes.LoadFoods),
    mergeMap((action) =>
      this.fs.getFood().pipe(
        map((food: FoodItem[]) => new foodActions.LoadFood_Success(food)),
        catchError((err) => of(new foodActions.LoadFood_Error(err)))
      )
    )
  );
}
```

Modify FoodReducer:

```typescript
export interface FoodState extends EntityState<FoodItem> {}

export const foodAdapter: EntityAdapter<FoodItem> = createEntityAdapter<
  FoodItem
>();

export const defaultFoodState: FoodState = {
  ids: [],
  entities: {},
};

export const initialState = foodAdapter.getInitialState(defaultFoodState);

export function FoodReducer(
  state = initialState,
  action: FoodActions
): FoodState {
  switch (action.type) {
    case FoodActionTypes.LoadFoods: {
      return state;
    }
    case FoodActionTypes.LoadFoods_Success: {
      return foodAdapter.addAll(action.payload, {
        ...state,
      });
    }
    case FoodActionTypes.LoadFoods_Error: {
      return { ...state };
    }
    default:
      return state;
  }
}
```

Create Selectios in `..food/store/selectors/food.selectors.ts`:

```typescript
import {
  foodFeatureKey,
  foodAdapter,
  FoodState,
} from '../reducers/food.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getFoodState = createFeatureSelector<FoodState>(foodFeatureKey);

export const getFoodEntities = createSelector(
  getFoodState,
  foodAdapter.getSelectors().selectAll
);

export const getAllFood = createSelector(getFoodEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});
```

### Consuming State

Modifiy `food-container.component.ts`:

```typescript
import { LoadFoods } from '../store/actions/food.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getAllFood } from '../store/selectors/food.selectors';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {
  constructor(private store: Store<FoodState>) {}

  food$: Observable<Array<FoodItem>> = this.store
    .select(getAllFood)
    .pipe(tap(data => console.log('data received from store', data)));
```
