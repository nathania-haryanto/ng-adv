Examine routing config in `demo.routing.module.ts` and also check in Network View of Browser Dev Tools:

```
children: [
...
{ path: 'lazy-standalone', loadComponent: () =>
    import('./samples/lazy-standalone/lazy-standalone.component').then(
    (c) => c.LazyStandaloneComponent
    ),
},
```