State Management using NgRx
---------------------------

In this tutorial we develop a very simple skills list.
![skills List App Screenshot](./_images/toggle-credits.png)

- In the first step we use ngrx to toggle the list of authors of the tutorial
- In the second step we add a lazy loaded feature module with own nrgx state to show the skills list

This part of the Tutorial implements the first step

# Installation:

Create a new Project Called `ngrx-skills` and open it in VS Code

```
> ng new ngrx-skills
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss]
```

> Note: Some Hints in this Guide assume that you are using the [NgRx Snippets - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=hardikpthv.NgRxSnippets)

Open folder in VS Code - open Terminal
Install ngrx

```
> npm i @ngrx/store @ngrx/effects @ngrx/entity -S
> npm audit fix
> npm ci
> npm i @ngrx/store-devtools -D
> ng add @ngrx/schematics
Installing packages for tooling via npm.
Installed packages for tooling via npm.
? Do you want to use @ngrx/schematics as the default collection? Yes
UPDATE angular.json (3756 bytes)
```

> Note: Answer the question "Do you want to use @ngrx/schematics as the default collection" with yes

# Schematics Overview

[NgRx Schematics Docs](https://ngrx.io/guide/schematics/store)

Shortcuts: a: Action, r: Reducer, ef: Effekt, se: Selector

General Syntax: ng g TYPE PATH/NAME --group

> Note: Path can be PATH/SUBPATH/Name


# Store & App State

Create Model Author interface: 
- create new folder "app/model"
- create file "author.ts"

```
export interface Author {
    id:number,
    mail:string
  }
```

Create Store - enter "." for the path question to point to the app module.

```
> ng g store State --root true --statePath store --module .            
CREATE src/app/store/index.ts (360 bytes)
UPDATE src/app/app.module.ts (727 bytes)
```

index.ts contains the global store and the global state - we add a Feature state to the global state in the next step

If no path is set for the question the store must be added manually
Runtime checks must be added manually anyway.

Add Store to app.module.ts

```typescript
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

...

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

# Add App Feature reducer and State:

Do not pollute the global state - build a separate state for App main data

```
> ng g r store/app --skipTests --group=false --api=false --creators=false  
CREATE src/app/store/app.reducer.ts (284 bytes)
```

Enter data for the app state.
Since it is a simple app we only have a flag that indicates if authors of the app are visible or not, and the authors list.

```typescript
import { Author } from '../model/author';


export const appFeatureKey = 'app';

export interface AppState {
  creditsVisible: boolean;
  authors: Author[];
}

export const initialState: AppState = {
  creditsVisible: false,
  authors: [],
};

export function reducer(state = initialState, action: Action): AppState {
  switch (action.type) {

    default:
      return state;
  }
}
```

It is usual to rename the State accoring to the Feature. 

Add the App "Feature" State to the global state in store/index.ts


```typescript 
import { appFeatureKey, AppState, reducer as AppReducer } from './app.reducer';


export interface State {
  [appFeatureKey]: AppState;
}

export const reducers: ActionReducerMap<State> = {
  [appFeatureKey]: AppReducer,
};
```

# Build the initial User Interface

Add a home component

```
ng g c home --skipTests 
```

Add [Angular Flex Layout](https://github.com/angular/flex-layout)

```
npm i -s @angular/flex-layout @angular/cdk
```

Import Angular Flex Layout to app.module

```typescript
. . .
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule, 
    . . .
```

Clean the app.component.html and set the app-home component as content

Add to `home.component.html`, also implement an empty `toggleCredits()` in the \*.ts

```html
<div fxLayout="column" fxLayoutAlign="center center">
  <h1>Skills Home</h1>

  <button mat-raised-button (click)="toggleCredits()">Toggle Credits</button>
</div>
```

```typescript
  toggleCredits(): void {
  }
```

# Add Actions

```
> ng g action store/app --group=false --creators=false --skipTests --api=false
```

Edit the new actions file

```typescript
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  AppToggleCredits = '[App] Toggle Credits',
  
  
}

export class AppToggleCredits implements Action {
  readonly type = AppActionTypes.AppToggleCredits;
}


export type AppActions = AppToggleCredits;
```

# Add Selector

```
> ng g selector store/app --group=false --skipTests
```

Edit the new selectors file.

we need a general selector to access the app State from the global state - and then feature specific detail selectors.


```
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, appFeatureKey } from './app.reducer';

export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getAppCreditsVisible = createSelector(
    getAppState,
    (state:AppState)=>state.creditsVisible
)
```

# Implement the reducer

```typescript
. . .
import { AppActions, AppActionTypes } from './app.actions';

. . .


export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.AppToggleCredits:
      return { ...state, creditsVisible: !state.creditsVisible };
    default:
      return state;
  }
}

``` 

If the "business logic" is harder to implement, extract it to a separate pure function,
or even in separate files / folders


```
. . .

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.ToggleCredits:
      return AppToggleCreditsActionImplementation(state,action);
    default:
      return state;
  }
}


function AppToggleCreditsActionImplementation(state:AppState, action: AppActions): AppState {
  // Business Logic
  return { ...state, creditsVisible: !state.creditsVisible };
}
```


# Use ngrx in Components

Open home.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppToggleCredits } from '../store/app.actions';
import { AppState } from '../store/app.reducer';
import { getAppCreditsVisible } from '../store/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  creditsVisible$ = this.store.select(getAppCreditsVisible);

  ngOnInit(): void {
  }

  toggleCredits(): void {
    this.store.dispatch(new AppToggleCredits());
  }

}

```


Add a div to `home.component.html`

```html
<div *ngIf="creditsVisible$ | async">
  CREDITS
</div>
```


You should be able to toggle the credits now:

![toggle-menu](./_images/toggle-credits.png)

Install Redux DevTools Chrome Browser Extension and view the Actions and State Diff.


# Lab "menueVisible"

Modify app actions, reducer and selector files to add a flag 'menuVisible'.

Time about 20 Min.


# Effects

## preparation 

Install Effects Lib - should be done at the inital ngrx install

```
> npm install @ngrx/effects --save
```

Create db.json file at project root level

```json
{
  "authors": [
    { "id": 1, "mail": "alexander.pajer@integrations.at" },
    { "id": 2, "mail": "alengauer.training@gmail.com" }
  ]
}
```

Install Json-server

```
> npm i json-server -g
```

## Add Actions to load authors list

Open File app.actions.ts

Add actions for Load, LoadSuccess and LoadFailure,
LoadSuccess has an action payload Author[]
LoadFailure has an action payload Error

```typescript
import { Action } from '@ngrx/store';
import { Author } from '../model/author';

export enum AppActionTypes {
  // App State
  AppToggleCredits = '[App] Toggle Credits',
  AppToggleMenu = '[App] Toggle Menu',

  // Authors
  AppLoadAuthors = '[App] LoadAuthors',
  AppLoadAuthorsSuccess = '[App] LoadAuthorsSuccess',
  AppLoadAuthorsFailure = '[App] LoadAuthorsFailure',
}

// App State
export class AppToggleCredits implements Action {
  readonly type = AppActionTypes.AppToggleCredits;
}

export class AppToggleMenu implements Action {
  readonly type = AppActionTypes.AppToggleMenu;
}

// Authors
export class AppLoadAuthors implements Action {
  readonly type = AppActionTypes.AppLoadAuthors;
}

export class AppLoadAuthorsSuccess implements Action {
  readonly type = AppActionTypes.AppLoadAuthorsSuccess;
  constructor(public authors: Author[]) {}
}

export class AppLoadAuthorsFailure implements Action {
  readonly type = AppActionTypes.AppLoadAuthorsFailure;
  constructor(public error: Error) {}
}


// Action Export
// First pipe created by Prettier Code Format
export type AppActions =
  | AppToggleCredits
  | AppToggleMenu
  | AppLoadAuthors
  | AppLoadAuthorsSuccess
  | AppLoadAuthorsFailure;

```


## Extend Selectors

Open file `app.selectors.ts`:

```typescript
export const getAppAuthors = createSelector(
  getAppState,
  (state: AppState) => state.authors
);
```


## Extend Reducer

Open file 'app.reducer.ts'

Load Action will be implemented by effect after the next step - Authors Service
Failure Action will be implemented later
Implement success action

```typescript
    . . .

    // Authors
    case AppActionTypes.AppLoadAuthorsSuccess:
      return AppLoadAuthorsSuccessImplementation(state, action);


    . . .


function AppLoadAuthorsSuccessImplementation(
  state: AppState,
  {authors}
): AppState {
  // Business Logic
  return { ...state, authors };
}
```


## Authors Service

```
 ng g s model/authors --skipTests
```

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Author } from './author';
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.httpClient
      .get<Author[]>(environment.apiUrl + "authors")
      .pipe(tap(data => console.log("data from api", data)));
  }
}
```

To make this working:
- add apiUrl in environment.ts with value 'http://localhost:3000/'
- add HttpClientModule in app.module
- Save the app.module file after adding HttpClientModule!

## LoadAuthors Effect:

Creating Effects modify the app.module! 
It must be saved before this step.

```
> ng g ef store/app --skipTests --group=false --module=. --creators=false --api=false --root=true
CREATE src/app/store/effects/app.effects.ts (186 bytes)
UPDATE src/app/app.module.ts (1140 bytes)
```

check the app.module file if the effect is created "forRoot":

```typescript
      . . .
      EffectsModule.forRoot([AppEffects]),
      . . .
```

Open file store/app.effects.ts

```typescript
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Author } from '../model/author';
import { AuthorsService } from '../model/authors.service';
import { AppActionTypes, AppLoadAuthorsFailure, AppLoadAuthorsSuccess } from './app.actions';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private auts: AuthorService) {}

  @Effect()
  loadAuthor$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadAuthors),
    mergeMap((action) =>
      this.auts.getAuthors().pipe(
        map((authors: Author[]) => new LoadAuthorsSuccess(authors)),
        catchError((err) => of(new LoadAuthorsFailure(err)))
      )
    )
  );
}
```

Other possibilities for the mapping are all flattening operators like exhaustMap, concatMap, ...
In this case a mergeMap will work fine - but often exhaustMap is used.
exhaustMap waits until the service is completed to deliver the resulting Observable.

For more information about exhaustMap [follow this link](https://www.learnrxjs.io/learn-rxjs/operators/transformation/exhaustmap) or [this link](https://rxjs.dev/api/operators/exhaustMap)

## Add an authors list & add it to `home.component.ts`:

```
ng g c authors/authors-list -m app --flat --skipTests 

CREATE src/app/authors/authors-list.component.html (27 bytes)
CREATE src/app/authors/authors-list.component.ts (299 bytes)
CREATE src/app/authors/authors-list.component.scss (0 bytes)
UPDATE src/app/app.module.ts (1239 bytes)
```

Add the following html & \*.ts:

```html
<div fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="16px">
  <h2>Credits:</h2>
  <div *ngFor="let a of authors | async">{{ a.mail }}</div>
</div>
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppLoadAuthors } from '../store/app.actions';
import { AppState } from '../store/app.reducer';
import { getAppAuthors } from '../store/app.selectors';

. . .

export class AuthorsListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  authors = this.store.select(getAppAuthors);

  ngOnInit(): void {
    this.store.dispatch(new AppLoadAuthors());
  }
}
```

Replace the HTML in home.components.html:

```html
<div
  *ngIf="creditsVisible$ | async"
  fxLayout="column"
  fxLayoutAlign="center center"
  fxLayoutGap="16px"
>
  <div><app-authors-list></app-authors-list></div>
</div>
```

## Lab Failure Management 

- Discuss different possibilities
- like ErrorMessage in State filled by action, loadAuthorsFailed boolean, ....
- Where to place the error message? In Home or in authors list component

Implement one of them to show the error on the ui

Time about 20 Min 

Stop json server to see if the error info works.
While HttpClient waits for result there is no info 

## IsLoading Indicator 

To implement isLoading is easy - but a little bit more complex to understand.

State changes are allowed only inside a reducer. The initial Action is implemented using an effect, but the action itself is also routed through the reducers. Therefore we can act on it.
The effect is just an async action path. It hooks into the ngrx action queue and listens to all actions that are processed by the reducer, and starts additional actions if needed.

The flow in the reducer is always in sync.

Open File app.reducer.ts

```typescript
. . .

export interface AppState {
  . . .
  authorsLoadFailure: boolean;
  authorsIsLoading:boolean;
  . . .
}

export const initialState: AppState = {
  . . .
  authorsLoadFailure: false,
  authorsIsLoading:false,
  . . .
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    . . .

    // Authors
    case AppActionTypes.AppLoadAuthors:
      return { ...state, authorsIsLoading: true };

    case AppActionTypes.AppLoadAuthorsFailure:
      return { ...state, authorsLoadFailure: true, authors: [], authorsIsLoading: false };
  
    case AppActionTypes.AppLoadAuthorsSuccess:
      return AppLoadAuthorsSuccessImplementation(state, action);

    . . .
    
     
    default:
      return state;
  }
}

. . .

function AppLoadAuthorsSuccessImplementation(
  state: AppState,
  { authors }
): AppState {
  // Business Logic
  return { ...state, authors, authorsLoadFailure: false, authorsIsLoading: false };
}

```

Open File app.selectors.ts
Add a selector 
```typescript
. . .

export const getAppAuthorsIsLoading = createSelector(
    getAppState,
    (state:AppState) => state.authorsIsLoading
)

export const getAppAuthorsLoadFailure = createSelector(
    getAppState,
    (state:AppState) => state.authorsLoadFailure
)

. . .

```

Open File authors-list.component.ts
Listen to authorsIsLoading selector observable

```typescript
. . .
import {
  getAppAuthors,
  getAppAuthorsIsLoading,
  getAppAuthorsLoadFailure,
} from '../store/app.selectors';

@Component({
  . . .
})
export class AuthorsListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  authors$ = this.store.select(getAppAuthors)

  authorsLoadFailure$ = this.store.select(getAppAuthorsLoadFailure)
  authorsIsLoading$ = this.store.select(getAppAuthorsIsLoading)

  ngOnInit(): void {
      this.store.dispatch(new AppLoadAuthors())
  }
}

```

Open file authors-list.component.html
```html
<div fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="16px">
  <h2>Credits:</h2>
  <div *ngIf="!(authorsIsLoading$ | async); else isLoadingIndicator">
    <div *ngIf="authorsLoadFailure$ | async">
        There was an error loading the authors
    </div>
    
    <div *ngFor="let a of authors$ | async">{{ a.mail }}</div>
    </div>
</div>
 
<ng-template #isLoadingIndicator>
	<div>Loading!!!!</div>
</ng-template>
```

## Discussion

Effects always need three actions - initial Load, LoadSuccess and LoadFailure.
To act on the Loading state and Error state additional fields are needed.

This can also be done by a single field that contains a enum

```typescript
enum LoadingState {
  INITIAL,
  LOADING,
  LOADED,
  ERROR
}


. . .
export interface AppState {
  . . .
  authors: Author[];
  authorsLoadingState:LoadingState;
  . . .
}

. . .

```

Using the LOADED Flag additional api calls can be avoided.


## Discussion: using effects for global Side Effects

Effects are like hooks in the ngrx action queue to the reducer, and can create new actions based on existing ones.

Think of a global spinner/loader component that should be activated whenever an action requires it.
We want to solve this just by implementing separate actions and a separate reducer for this.

See (example)[https://stackblitz.com/edit/angular-tutorial-create-loading-indicator-using-ngrx?file=src%2Fapp%2Fstore%2Freducers%2Floading-spinner.ts]



