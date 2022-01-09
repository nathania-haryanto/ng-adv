# Configuration Management

## Inject Configuration using config service

See `..\09-Optimization\01-Optimizing`

## Config from Environments Vars

Examine `./src/assets` and `./src/environments`

`env.js` is referenced in `index.html`:
```typescript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "http://localhost:5001/food";
})(this);
```

`environment.ts`:
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

`dockerfile` uses `env.template.js` to update `env.js`:

```bash
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
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