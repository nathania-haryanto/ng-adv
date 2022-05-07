Explaing ngOnDestroy:

```typescript
ngOnDestroy() {
    this.keySubs.unsubscribe();
}
```

Discuss on how to improve the following mat-form-field

```html
<mat-form-field>
    <input matInput #searchBox 
    placeholder="Enter some Text and watch console"/>
</mat-form-field>
```