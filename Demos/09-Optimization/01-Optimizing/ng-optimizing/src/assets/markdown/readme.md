# Optimizing Angular

## Building & Optimizing Applications

- Using Linting and Autoformat with Prettier
- Using Chrome Dev Tools & Lighthouse for Performance Optimization
- Understanding & Using Page Traces
- Advanced Angular Debugging using @angular/core/global
- Analyzing and Optimizing Bundles & Modules
- Code-Splitting and Module Pre-Loading
- Understaning & Optimizing Angular Change Detection
- Optimize Change Detection using @ngrx/component & ngrxPush
- Server Side Rendering using Angular Universal

[Lighthouse](https://developers.google.com/web/tools/lighthouse)

[Angular AOT Compiler](https://angular.io/guide/aot-compiler)

[Angular Debug Statements](https://angular.io/api/core/global)

## Analyzing Bundles

[Performance Budget Calculator](https://perf-budget-calculator.firebaseapp.com/)

[ngx-quickling - preloading](https://github.com/mgechev/ngx-quicklink)

Replace older Libs with newer:

ie Moment.js with [date-fns](https://date-fns.org/)

Install Source Map Explorer:

```
npm i -S source-map-explorer
```

Create Production Build:

```
ng build --prod
```

Analyze Chunks:

```
source-map-explorer dist/main-es5.28a67cbad0b0a3f17e1e.js
```
