ContentChild is used to access projected content of a component. Projector implementation:

```html
<div class="expander">
    <h1>I am the projector</h1>
    <div class="projection">
        <ng-content ></ng-content>
    </div>   
</div>
```

Projector usage:

```html
<app-projector>
   <div #mycomment>things are not always as they seem to be</div>
</app-projector>
```
Watch console for output:

```typescript
export class ProjectorComponent implements AfterContentInit {
  @ContentChild('mycomment') divComment: ElementRef | null = null;

  ngAfterContentInit(): void {
    console.log("the comment: ", this.divComment?.nativeElement);
  }
}
```