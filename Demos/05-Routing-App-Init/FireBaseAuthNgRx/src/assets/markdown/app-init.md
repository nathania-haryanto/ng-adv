Examine the two APP_INITIALIZER's registered in app.module.ts

```json
providers: [
{
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [AppInitService],
    multi: true,
},
{
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    deps: [ConfigService],
    multi: true,
}
```