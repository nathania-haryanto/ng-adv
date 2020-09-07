# Angular Libraries

[Angular Library Docs](https://angular.io/guide/libraries)

[Multible Projects - Angular File Structure](https://angular.io/guide/file-structure)

[Angular Strict Mode](https://angular.io/guide/strict-mode)

## Getting Started

Create a host project & Add Material & Flex Layout:

```
ng new nglibs
cd nglibs
ng add @angular/material
npm i -S @angular/flex-layout
```

Create Library:

```
ng g library ux-controls --prefix=ux
```

Delete the service `ux-controls.service.ts`, `ux-controls.component.ts` and its \*.spec-files. Remove it from `ux-controls.module.ts` and `public-api.ts`

### Implement a the Split Control

Add the SplitComponent:

```
ng g c controls/split --project=ux-controls
```

Update `ux-controls.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SplitComponent } from './controls/split/split.component';

const comps = [SplitComponent];

@NgModule({
  declarations: comps,
  imports: [MatToolbarModule, FlexLayoutModule],
  exports: comps,
})
export class UxControlsModule {}
```

Update PeerDependencies in `package.json` of the library:

```typescript
"peerDependencies": {
    "@angular/common": "^10.0.3",
    "@angular/core": "^10.0.3",
    "@angular/animations": "~10.0.3",
    "@angular/flex-layout": "^10.0.0-beta.32",
    "@angular/material": "^10.0.1"
  },
```

> Note: You might want to change version numbers depending on the current versions

Implement the Component:

split.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ux-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss'],
})
export class SplitComponent implements OnInit {
  constructor() {}

  toolbar = '100px';

  ngOnInit() {}
}
```

split.component.html

```html
<div
  gdGap="0.5rem"
  gdAreas="title title | main toolbar"
  gdColumns="800px auto"
  gdRows="60px auto"
  class="container"
>
  <div gdArea="title" class="split-title">
    <mat-toolbar mat-dialog-title>
      <mat-toolbar-row>
        <ng-content select=".title"></ng-content>
      </mat-toolbar-row>
    </mat-toolbar>
  </div>
  <div gdArea="main" class="split-main">
    <ng-content select=".main"></ng-content>
  </div>
  <div gdArea="toolbar" class="split-sidebar">
    <ng-content select=".sidebar"></ng-content>
  </div>
</div>
```

split.component.scss

```css
.container {
  min-height: 50vh;
  height: 100%;
}

.split-main {
  padding: 1rem;
}

.split-sidebar {
  padding: 1rem;
}
```

Modify `public-api.ts`:

```typescript
export * from './lib/controls/split/split.component';
export * from './lib/ux-controls.module';
```

Build Library:

```
ng build --project ux-controls
```

> Note: You could also run `ng build ux-controls` or use the `--watch` flag

#### Use the Split Control

To use the Component import it in `app.module.ts` of you Main Project

```typescript
import { UxControlsModule} from "ux-controls"

@NgModule({
  ...
  imports: [
    ...
    UxControlsModule
  ],
  ...
})
export class AppModule { }
```

Add it to `app.component.ts` and run `ng s -o`:

```html
<ux-split>
  <div class="title">UX Split</div>
  <div class="main">Main Content</div>
  <div class="sidebar">Sidebar Buttons</div>
</ux-split>
```

```typescript
export class AppComponent {
  constructor() {}

  isDisabled: boolean = true;

  ngOnInit() {}
}
```

### Publish to NPM

[Publish to NPM](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

- Create a production build using the `--prod` flag
- Login to npm using `npm login`
- Run `npm publish` from lib folder
