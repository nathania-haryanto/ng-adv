# Angular Universal

[Angular Universal](https://angular.io/guide/universal)

[AppShell](https://angular.io/guide/app-shell)

## Configure Angular Universal

Create project and add Universal:

```
ng new ng-universal
cd ng-universal
ng add @nguniversal/express-engine
```

Add a script to track First Contenful Pain (FCP):

```
<script>
    // Log first contentful paint - source https://web.dev/fcp/#measure-fcp-in-javascript
    const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntriesByName("first-contentful-paint")) {
        console.log("FCP: ", entry.startTime);
        observer.disconnect();
    }
    });
    observer.observe({ type: "paint", buffered: true });
</script>
```

> Note: Reade more about [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) on MDN

Build Client und Server side & track values. Use different splits

```
ng s -o
npm run build:ssr
npm run serve:ssr
```

> Note: Execute Node Express on `http://localhost:4000` and compare FCP values and examine the html source. Also create Lighthouse Audit and compare time used for `Scripting`

Use Universal watch mode:

```
npm run dev:ssr
```

## Use Prerendering

Investigate `prerender` section in `angular.json`:

```
"prerender": {
          "builder": "@nguniversal/builders:prerender",
          "options": {
            "browserTarget": "ng-universal:build:production",
            "serverTarget": "ng-universal:server:production",
            "routes": ["/1", "/2", "/3", "/4"]
          },
          "configurations": {
            "production": {}
          }
        }
```

Create prerendered pages:

```
npm run prerender
```
