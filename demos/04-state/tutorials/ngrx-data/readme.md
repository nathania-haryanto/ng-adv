# NgRx Data

## Scaffold and Preperation

Create project:

```bash
ng new ngrx-data
```

Add NgRx:

```bash
npm i -S @ngrx/store @ngrx/entity @ngrx/effects
npm i -D @ngrx/store-devtools
ng add @ngrx/data@latest
```

Import the following common modules to `app.module.ts`:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    CommonModule,
    FormsModule,
    HttpClientModule,
```

Start json-server:

```bash
json-server db.json --watch
```

>Note: You can use the db.json located in this folder

## Add ngrx/data with a base EntityDataService

>Note: A completed solution is `ngrx-data-base-entity-service`

Add `skills/skills.model.ts`:

```typescript
export interface Skill {
  id: number;
  name: string;
  completed: boolean;
}
```

Update `skills/entity-metadata.ts`:

```typescript
import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Skill } from './skill.model';

export function sortByName(a: Skill, b: Skill): number {
  let comp = a.name.localeCompare(b.name);
  return comp;
}

const entityMetadata: EntityMetadataMap = {
  Skill: {
    selectId: (skill: Skill) => skill.id,
    sortComparer: sortByName,
  },
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
```

Add basic ngrx modules to `app.module.ts`:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
```

>Note: This tutorial shows how to register @ngrx/data in the root module. The main demo registeres it at a feature module `skills`

@ngrx/data exprects rest urls in the format /api/{entityName}/{id}. To change this behavior, you can create a custom url generator.

Add a custom URL Generator in `skills/custom-urlgenerator.ts`. 

```typescript
@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean
  ): HttpResourceUrls {
    let resourceURLs = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Skill') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:3000/skills/',
        entityResourceUrl: 'http://localhost:3000/skills/',
      };
      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }
    return resourceURLs;
  }
}
```

The custom URL generator is registered in `app.module.ts`:

```typescript
providers: [
  {
    provide: HttpUrlGenerator,
    useClass: CustomurlHttpGenerator,
  },
],
```

There are two ways of creating the base EntityService:
  
- In the component using the EntityCollectionServiceFactory

  ```typescript
  constructor(private factory: EntityCollectionServiceFactory) {
    this.skillsService = this.factory.create<Skill>('Skill');
    this.skills$ = this.skillsService.entities$;
  }
  ```
- Using an explicit service `skills-entity.service.ts`. Use this approach if you want to use the service in multiple components. 

  ```typescript
  @Injectable({
    providedIn: 'root',
  })
  export class SkillsEntityService extends EntityCollectionServiceBase<Skill> {
    constructor(factory: EntityCollectionServiceElementsFactory) {
      super('Skill', factory);
    }
  }
  ```

>Note: For this lab we are using the second approach.  

Add a `skills/skills.component.ts` using the Angular CLI and add the following code to it:

```typescript
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  skillsService: EntityCollectionService<Skill>;

  constructor(es: SkillsEntityService) {
    this.skillsService = es;
    this.skills$ = this.skillsService.entities$;
  }

  ngOnInit(): void {
    this.skillsService.getAll();
  }

  addSkill() {
    this.skillsService.add({ id: 0, name: '@ngrx/data', completed: false });
  }

  deleteSkill(item: Skill) {
    this.skillsService.delete(item);
  }
}
```

Add the skills component to `app.component.html`:

```html
<div class="content" role="main">
  <app-skills></app-skills>
</div>
```

Implement the UI that uses this methods:

![base-ui](_images/base-ui.jpg)