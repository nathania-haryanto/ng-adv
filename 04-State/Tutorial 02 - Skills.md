State Management using NgRx
---------------------------

In this tutorial we develop a very simple skills list.
![skills List App Screenshot](./_images/toggle-credits.png)


- In the first step we use ngrx to toggle the list of authors of the tutorial
- In the second step we add a lazy loaded feature module with own nrgx state to show the skills list


This part of the Tutorial implements the second step


# Preparation for Lazy Loaded Feature Module with NgRx Entity, Facades and Creator Functions

Creator Functions:

- createAction
- createEffect
- createReducer

Add skills module

```
ng g module skills --route skills --module app.module.ts --skipTests
``` 

Add [Angular Flex Layout](https://github.com/angular/flex-layout)

```
npm i -s @angular/flex-layout @angular/cdk
```

Add Skills Data to db.json & create a skill.model.ts:

```json
"skills": [
  { "id": "123", "name": "rxjs", "completed": true },
  { "id": "456", "name": "ngrx", "completed": false }
]
```


Open "home/home.component.html" and add a link to skills

```html
  <div *ngIf="menuVisible$ | async">
    <a [routerLink]="['/skills']" >
        Show Skills
    </a>
  </div>
```

Open app.component.html and add router-outlet

```html
<app-home></app-home>
<router-outlet></router-outlet>
```

Add skills components

```
> ng g c skills/skills-list-with-row --skipTests
> ng g c skills/skill-row --skipTests
```

Add skill model in skills/model/skill.model.ts

```typescript
export interface Skill {
    id:number,
    name:string,
    completed:boolean
}
```

Add skill service in skills/model/skills.service.ts

```
ng g s skills/model/skills --skipTests
```

initial code:

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'  // if only used in lazy loaded module means the service is also lazy loaded.
})
export class SkillsService {

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.httpClient
      .get<Skill[]>(environment.apiUrl + "skills")
      .pipe(tap(data => console.log("data from api", data)));
  }

  addSkill(skill:Skill): Observable<Skill> {
    return this.httpClient
      .post<Skill>(environment.apiUrl + "skills", skill).pipe(
        tap(data => console.log("addSkill data from api", data))
        );   
  }
}
```

Remark about providedIn: 'root'

See further [docs](https://angular.io/guide/providers#providing-a-service)

Or on [dev.to](https://dev.to/nickraphael/angular-s-providedin-root-what-if-two-lazy-modules-provided-the-same-service-166p)


# Add reducer with creator

```
> ng g r skills/store/skills --skipTests --group=false --api=true --creators=true  --module skills
CREATE src/app/store/app.reducer.ts (284 bytes)
```

Then add the state skills data.

Our State should look like this:

```typescript
export const skillsFeatureKey = 'skills';

export interface SkillsState {
  skills: Skill[];
}

export const initialState: SkillsState = {
  skills: [],
};

export const reducer = createReducer(
  initialState,

);
```


Look at skills/skills.module.ts how the reducer is declared

# Add Actions with creator

```
> ng g a skills/store/skills --api=true --creators=true --skipTests    
CREATE src/app/skills/store/skills.actions.ts (347 bytes)
```

correct the trailing s in Skillss

Other needed actions can be created using the ngrx-create-action-props code snippets.
complete code:

```typescript
import { createAction, props } from '@ngrx/store';
import { Skill } from '../model/skill.model';

export const loadSkills = createAction('[Skills] Load Skills');

export const loadSkillsSuccess = createAction(
  '[Skills] Load Skills Success',
  props<{ skills: Skill[] }>()
);

export const loadSkillsFailure = createAction(
  '[Skills] Load Skills Failure',
  props<{ error: Error }>()
);

// addSkill action -> easy creation using: ngrx-create-action-props
export const addSkill = createAction('[Skills] Add', props<{ skill: Skill }>());

export const addSkillSuccess = createAction(
  '[Skills] Add Skills Success',
  props<{ skill: Skill }>()
);

export const addSkillFailure = createAction(
  '[Skills] Add Skills Failure',
  props<{ error: Error }>()
);

```

# Skills Effect:

Creating Effects modify the skills.module! 
It must be saved before this step.

```
> ng g ef skills/store/skills --skipTests --group=false --module=skills --creators=true --api=true --root=false
CREATE src/app/skills/store/skills.effects.ts (195 bytes)
UPDATE src/app/skills/skills.module.ts (889 bytes)
```

Add the Skills Service to the constructor.
Add needed Imports and import Skills Actions as SkillsActions

> Note: To implement the Effect you could use the `ngrx-effect` Snippet

```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Skill } from '../model/skill.model';
import { SkillsService } from '../model/skills.service';
import * as SkillsActions from './skills.actions';

@Injectable()
export class SkillsEffects {
  constructor(private actions$: Actions, private service: SkillsService) {}

  // @Effect()
  // decorator not needed if using createEffect
  // function createEffect is type safe and the effect has to return an Observable<Action>

  loadSkills$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SkillsActions.loadSkills),
      switchMap((action) => {
        return this.service.getSkills().pipe(
          map((skills: Skill[]) => SkillsActions.loadSkillsSuccess({ skills })),
          catchError((error: Error) =>
            of(SkillsActions.loadSkillsFailure({ error }))
          )
        );
      })
    );
  });

  addSkill$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SkillsActions.addSkill),
      switchMap(({skill}) => {
        return this.service.addSkill(skill).pipe(
          map((skill: Skill) => SkillsActions.addSkillSuccess({ skill })),
          catchError((error: Error) =>
            of(SkillsActions.loadSkillsFailure({ error }))
          )
        );
      })
    );
  });
}
```

# Skills Selector

```
> ng g selector skills/store/skills --group=false --skipTests          
CREATE src/app/skills/store/skills.selectors.ts (70 bytes)
```

Open selector file and implement selector function to get skills

```typescript
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { skillsFeatureKey, SkillsState } from './skills.reducer';

export const getSkillState = createFeatureSelector<SkillsState>(skillsFeatureKey)

export const getSkills = createSelector(
    getSkillState,
    (state:SkillsState) => state.skills
)
```

# Extend Skills reducer with the load and add actions

```typescript
import { Action, createReducer, on } from '@ngrx/store';
import { Skill } from '../model/skill.model';
import * as SkillsActions from './skills.actions';

export const skillsFeatureKey = 'skills';

export interface SkillsState {
  skills: Skill[];
}

export const initialState: SkillsState = {
  skills: []
};


export const reducer = createReducer(
  initialState,
  on(SkillsActions.loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills,
  })),
  on(SkillsActions.addSkillSuccess, (state, { skill }) => ({
    ...state,
    skills: [...state.skills, skill],
  }))
);

```

# Skills Facade

add new file to store/skills-facade.service.ts

```
> ng g s skills/store/skills-facade --skipTests   
CREATE src/app/skills/store/skills-facade.service.ts (141 bytes)
```


```typescript
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { addSkill, loadSkills } from './skills.actions';
import { SkillsState } from './skills.reducer';
import { getSkills } from './skills.selectors';

@Injectable({
  providedIn: 'root'
})
export class SkillsFacadeService {

  constructor(private store:Store<SkillsState>) { }

  initSkills():void {
    this.store.dispatch(loadSkills())
  }

  getSkills():Observable<Skill[]> {
    return this.store.select(getSkills)
  }

  addSkill(skill:Skill):void {
    return this.store.dispatch(addSkill({skill}))
  }

  // ...
}

```

# Skills List UI

```
> ng add @angular/material
```


```typescript
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

. . .

@NgModule({
  declarations: [SkillsComponent, SkillsListWithRowComponent, SkillsRowComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatCardModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,

    . . .
```

on errors reset npm modules
 
```
npm ci 
```

## Implement Skill Component

```html
<h1>Skills List</h1>

<app-skills-list-with-row></app-skills-list-with-row>
```

## Implement Skill-Row

```html
<div fxLayout="row" fxLayoutAlign="space-between center" fxFlexFill class="row">
  <div fxFlex="3 1 auto" style="padding-left: 2rem">{{ skill?.name }}</div>
  <div fxFlex="1 1 140px">
    <mat-slide-toggle
      color="primary"
      (change)="toggleItemCompleted(skill)"
      [checked]="skill?.completed"
      >Completed</mat-slide-toggle
    >
  </div>
  <div fxFlex="1 1 80px">
    <button mat-raised-button color="primary" (click)="deleteItem(skill)">
      <mat-icon>delete</mat-icon>
    </button>
  </div>
</div>
```


```typescript
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
})
export class SkillRowComponent implements OnInit {
  @Input() skill: Skill;
  @Output() itemDeleted: EventEmitter<Skill> = new EventEmitter();
  @Output() itemCompleted: EventEmitter<Skill> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(item: Skill): void {
    this.itemDeleted.emit(item);
  }

  toggleItemCompleted(item: Skill): void {
    this.itemCompleted.emit(item);
  }
}

```

## Implement Skills-List


\*.html:

```html
<mat-toolbar color="primary">
  <mat-toolbar-row fxLayoutAlign="space-between center">
    <div>SPA Skills</div>
    <div fxLayoutGap="10px">
      <button mat-raised-button (click)="addItem()">Add</button>
      <mat-slide-toggle [formControl]="fcToggle" color="accent">
        ShowAll
      </mat-slide-toggle>
    </div>
  </mat-toolbar-row>
</mat-toolbar>

<mat-card>
  <mat-card-content fxLayout="column">
    <ng-container *ngFor="let sk of view$ | async" class="item">
      <app-skill-row
        [skill]="sk"
        (itemDeleted)="deleteItem($event)"
        (itemCompleted)="toggleItemComplete($event)"
      ></app-skill-row>
    </ng-container>
  </mat-card-content>
</mat-card>
```

\*.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Skill } from '../model/skill.model';
import { SkillsFacadeService } from '../store/skills-facade.service';

@Component({
  selector: 'app-skills-list-with-row',
  templateUrl: './skills-list-with-row.component.html',
  styleUrls: ['./skills-list-with-row.component.scss'],
})
export class SkillsListWithRowComponent implements OnInit {
  constructor(private sf: SkillsFacadeService) {}

  skills$ = this.sf.getSkills();
  // Remove 'true' and it does not work
  fcToggle = new FormControl(true);

  view$ = combineLatest([
    this.skills$,
    this.fcToggle.valueChanges.pipe(startWith(true)),
  ]).pipe(
    map(([skills, showAll]) => {
      return showAll ? skills : skills.filter((sk) => sk.completed === showAll);
    })
  );

  ngOnInit(): void {
    this.sf.initSkills();
  }

  addItem(): void {
    const newItem: Skill = { id: null, name: 'New Skill', completed: false };
    this.sf.addSkill(newItem);
  }

  deleteItem(item: Skill): void {
    //this.sf.deleteSkill(item);
  }

  toggleItemComplete(item: Skill): void {
    //this.sf.toggleComplete(item);
  }
}
```





