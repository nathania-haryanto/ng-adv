# NgRx Data Simple

## Scaffold and Preperation

Create project:

```bash
ng new ngrx-data-simple
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

## Add ngrx/data

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
  ],
```