## Inject Configuration using config service - Optional

Go to [config.service.ts](/Demos/10-Optimization/01-Optimizing/ng-optimizing/src/app/shared/config/config.service.ts) of Module 9 and investigate its usage in `app.module.ts`.

```typescript
import { Injectable } from '@angular/core';
import { AppConfig } from './app.config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cfg: AppConfig;
  constructor(private httpClient: HttpClient) {}

  loadConfig() {
    return this.httpClient
      .get<AppConfig>('./assets/config.json')
      .toPromise()
      .then((config) => {
        this.cfg = config;
      });
  }
}
```

app.module.ts:
```typescript
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
  ...

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
```