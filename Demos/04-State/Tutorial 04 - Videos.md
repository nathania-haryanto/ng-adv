State Management using NgRx
---------------------------

In this tutorial we develop a very simple videos list.
- In difference to books list we will use ngrx Data to manage the list


# Preparation for Lazy Loaded Feature Module with ngrx Data

Add Videos module

```
ng g module videos --route videos --module app.module.ts 
``` 

Add videos Data to db.json & create a videos.model.ts:

```json
"videos": [
    {
      "id": "888",
      "name": "youtube",
      "url": "https://www.youtube.com/",
      "completed": true
    },
    {
      "id": "999",
      "name": "bing videos",
      "url": "https://www.bing.com/videos",
      "completed": false
    }
  ]
```


Open "home/home.component.html" and add a link to skills

```html
  <div *ngIf="menuVisible$ | async">
    . . .
    <a [routerLink]="['/videos']" >
        Show Videos
    </a>
  </div>
```

Add videos model in videos/model/video.model.ts

```typescript
export interface Video {
    id:number,
    name:string,
    url:string,
    completed:boolean
}
```

Add ngrx data

```
npm install @ngrx/data
``` 

# @NgRx Data 

## Define Metadata

create a new file "src/app/videos/model/video.metadata.ts"

```
import { EntityMetadataMap } from '@ngrx/data';

// shortest possible metadata config version - wihtout optional stuff:
export const videoMetadata: EntityMetadataMap = {
    Video:{}
}
```

## register the Store and the Data Module

Since there is no ".forFeature" yet the main Entity Data Module must be registerd in app.module

Within Providers the default service config can be overwritten, if the api is placed on another url

Open "src/app/app.module.ts"

```typescript
. . .

import { EntityDataModule } from '@ngrx/data';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthorsListComponent],
  imports: [
  	
  	. . .

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    
    EntityDataModule.forRoot({})

    . . .
  ],
  providers: [
    {
      provide:DefaultDataServiceConfig, useValue:{
        root:environment.apiUrl,
        timeout:3000
      }
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

Then register the videos metadata in the feature module constructor

Open "src/app/videos/videos.module.ts"

```typescript
. . .
import { EntityDefinitionService } from '@ngrx/data';
import { videoMetadata } from './model/video.metadata'

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
  ]
})
export class VideosModule { 
  constructor(eds:EntityDefinitionService) {
    eds.registerMetadataMap(videoMetadata)
  }
}

```

# UI

## import material

add material to videos.module.ts

```typescript
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

. . .

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    
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

## create ui in videos.component


Open file src/app/videos/videos.component.ts

```typescript
import { MethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Video } from './model/video.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videoService: EntityCollectionService<Video>;
  videos$: Observable<Video[]>;
  isLoading$: Observable<boolean>;

  constructor(entityService: EntityServices) {
    this.videoService = entityService.getEntityCollectionService('Video'); 
    this.videos$ = this.videoService.entities$;
    this.isLoading$ = this.videoService.loading$;
  }

  ngOnInit(): void {
    this.videoService.load();
  }

  addItem(): void {
    const newVideo: Video = {
      id: null,
      name: 'New Video Name',
      url: 'http://video.com',
      completed: false,
    };
    this.videoService.add(newVideo);
  }
}

```

Open file src/app/videos/videos.component.html

```html
<mat-toolbar color="primary">
  <mat-toolbar-row fxLayoutAlign="space-between center">
    <div>SPA Videos</div>
    <div fxLayoutGap="10px">
        <button mat-raised-button (click)="addItem()">Add</button>
    </div>
  </mat-toolbar-row>
</mat-toolbar>

<mat-card>
  <mat-card-content fxLayout="column">
    <ng-container *ngFor="let video of videos$ | async" class="item">
      <div
        fxLayout="row"
        fxLayoutAlign="space-between center"
        fxFlexFill
        class="row"
      >
        <div fxFlex="3 1 auto" style="padding-left: 2rem">
          {{ video?.name }}
        </div>
      </div>
    </ng-container>
  </mat-card-content>
</mat-card>

```

Videos list is shown - but the Add button seems not to work. -> see CRUD

# CRUD

## V1 - CRUD already works

There is nothing to do on code - CRUD already works

BUT: It is using urls that do not fit to json-server

```
/videos - is used to load all
/video - is used to add, delete, update
```

The API must fit this - to do so json-server routing can be defined

On top level create a file "json-server.json" - that is the config file

```json
{
    "port": 3000,
    "routes": "./json-server-routes.json"
}
```

Then create a file "json-server-routes.json"

```json
{
  "/video/*": "/videos/$1",
}
```

ng serve the application and look into Redux dev tools to view state.


## V2 - CRUD with own DataService

In ngrx data almost everything can be overwritten
So an own DataService can be defined to be used too.
It must fit with the member functions defined by ngrx data

The following is the ngrx data INTERNAL base interface
An own service must implement these functions

```typescript
export interface EntityCollectionDataService<T> {
    readonly name: string;
    add(entity: T): Observable<T>;
    delete(id: number | string): Observable<number | string>;
    getAll(): Observable<T[]>;
    getById(id: any): Observable<T>;
    getWithQuery(params: QueryParams | string): Observable<T[]>;
    update(update: Update<T>): Observable<T>;
    upsert(entity: T): Observable<T>;
}
```

In addition the dataservice must be registered in the module (see below)

### Add Own VideosService

Add videos service in videos/model/videos.service.ts

```
> ng g s videos/model/videos --skipTests
CREATE src/app/videos/model/videos.service.ts (135 bytes)
```

edit the new file

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryParams } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService { 

  constructor(private httpClient:HttpClient) { 
  }

  readonly name: string = 'videos';
  readonly baseUrl = `${environment.apiUrl}${this.name}`

  getAll():Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.baseUrl)
  }

  getById(id:string):Observable<Video> {
    return this.httpClient.get<Video>(`${this.baseUrl}/${id}`)
  }

  add(video:Video):Observable<Video> {
    return this.httpClient.post<Video>(this.baseUrl,video)
  }

  delete(id:string):Observable<string> {
    return this.httpClient.delete<Video>(`${this.baseUrl}/${id}`).pipe(map(()=>id))
  }

  upsert(video:Video):Observable<Video> {
    return this.httpClient.put<Video>(`${this.baseUrl}/${video.id}`,video)
  }

  getWithQuery(queryParams: QueryParams | string): Observable<Video[]> {
    return this.getAll()
  }
  
  update(update: Update<Video>): Observable<Video> {
    // update is a special structure that shows the changed values - needs special handling
    // use upsert commands for convenience
    return of(null)
  }


  /* 
    // to use this as an service for ngrx data, the following functions must be implemented
    // depending on the needs of the application

    readonly name: string = '<T>';
    add(entity: T): Observable<T>;
    delete(key: number | string): Observable<number | string>;
    getAll(): Observable<T[]>;
    getById(key: number | string): Observable<T>;
    getWithQuery(queryParams: QueryParams | string): Observable<T[]>;
    update(update: Update<T>): Observable<T>;
    upsert(entity: T): Observable<T>;
  */
}
```


### Register Own Service

Open module file: src/videos/videos.module.ts

```typescript
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';

. . . 

import { VideosService } from './model/videos.service';


@NgModule({
  declarations: [VideosComponent],
  imports: [
	. . .
  ]
})
export class VideosModule { 
  constructor(eds:EntityDefinitionService, entityDataService:EntityDataService, videosService:VideosService) {
    eds.registerMetadataMap(videoMetadata)
    entityDataService.registerService('Video',videosService)
  }
}
```


REMARK:
If just working with own services

- the DefaultDataServiceConfig in appModule can be removed
- the routing of the json-server can be removed

