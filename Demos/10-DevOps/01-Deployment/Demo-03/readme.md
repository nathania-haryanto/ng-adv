# Configuration Management

## Inject Configuration using config service - Optional

Go to (config.service.ts)[https://github.com/arambazamba/ng-adv/blob/main/Demos/09-Optimization/01-Optimizing/ngOptimizing/src/app/shared/config/config.service.ts] and investigate its usage.

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
## Config from Environments Vars

Open project `ng-config-env` and examine `./src/assets` and `./src/environments`

`env.js` is referenced in `index.html`:
```typescript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "http://localhost:5001/food";
})(this);
```

`environment.ts` references `window['env']`-variables:
```typescript
declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: false,
  apiUrl: window['env'].API_URL,
};
```

`dockerfile` calls `env.transform.js` to update `env.js` with current environment variables:

```bash
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
```

`env.transform.js`:
```typescript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "${ENV_API_URL}";
})(this);
```

Build image and run container:

```bash
docker build --rm -f "dockerfile" -t ng-config-env .
docker tag ng-config-env arambazamba/ng-config-env
docker push arambazamba/ng-config-env
```

Run container:

```bash
docker run -d --rm -p 5052:80 ng-config-env --env ENV_API_URL="https://food-api-staging-4591.azurewebsites.net"
http://localhost:5052
```