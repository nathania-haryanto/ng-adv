Drag an Element up or down. Explain Stateful Service implemented in `stateful-demo.service.ts` that uses BehaviorSubject

```typescript
private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject<DemoItem[]>([]);

private initData() {
    this.httpClient.get<DemoItem[]>(`${environment.apiUrl}demos`).subscribe((data) => {this.demos.next(data);});
}
```