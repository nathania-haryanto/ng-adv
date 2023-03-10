# Components & Forms Deep Dive

- Standalone Components: Creation, Lazy Loading, Bootstrapping
- Templates TemplateRef, *ngTemplateOutlet
- Compoarision: ng-template vs ng-content - pro / cons
- ViewChild, -Children, ContentChild, -Children
- HostBinding & HostListener
- Recap Reactive Forms Revisited (FormGroup, Form Builder, FormControl, FormArray)
- Untyped Forms vs Typed Forms 
- Typed Forms Nullability, NonNullableFormBuilder, GetRawValue
- Partial Values, Optional Controls, Dynamic Groups and FormRecord
- Cascading Form Controls
- Implementing Custom Controls using ControlValueAccessor
- Typed Forms Validation & Custom Validators
- Handling FormErrors & ErrorStateMatcher
- Dynamic Form Generation

## Standalone Components

Existing apps can be migrated to Standalone Components using Schematics:

```
ng g @angular/core:standalone
```

### Bootstrapping

Update main.ts:

```typescript
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';ö
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent).catch((err) => console.error(err));
```
## Readings

[Dynamic Forms: ngx-formly](https://github.com/ngx-formly/ngx-formly)

[Configuration based reactive Angular Forms with ngx-formly](https://egghead.io/playlists/configuration-based-reactive-angular-forms-with-ngx-formly-465f)
