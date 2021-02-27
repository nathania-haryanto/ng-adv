Basically Debugging is done using the tap() operator. If you want to visualize Observables using Marbles you can use rxjs-watch.

Install npm package: `npm i rxjs-watcher --save-dev`

Install [RxJs Watch Extension]("https://chrome.google.com/webstore/detail/rxjs-watcher/dfpjfjpfpjjgoeackldilanadoeaciam")

Switch to `RxJS watcher` in Dev Tools

```typescript
watchRxJS() {
    interval(2000)
      .pipe(
        watch("Interval (2000)", 10),
        filter(v => v % 2 === 0),
        watch("Filter odd numbers out", 10)
      )
      .subscribe();
  }
```
