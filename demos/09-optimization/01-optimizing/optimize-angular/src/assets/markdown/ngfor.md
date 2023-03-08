- Examine `trackBy` in `ngfor.component.ts`. It enables the re-use of DOM elements. This is especially useful for lists with many elements. 

- The `trackBy` function is called for each element in the list. The function receives the current index and the current element. The function must return a unique identifier for the element. The identifier is used to track the element. 

If the identifier changes, the element is re-created. If the identifier stays the same, the element is re-used. The following example shows how to use the `trackBy` function:

```html
<li *ngFor="let element of array; trackBy: trackElement">
  {{ element.name }}
</li>
```
