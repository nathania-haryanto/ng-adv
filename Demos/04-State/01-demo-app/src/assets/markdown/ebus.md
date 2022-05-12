EventBus pattern which basically is a stateful service, allows communication between components that are not directley nested like Container / Presenter.

- Examine `menu.service.ts`:

```typescript
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }
  visible$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  position$: BehaviorSubject<string> = new BehaviorSubject('over');
```

- Explain `menu.service.ts` and its responsive behavior when changing screen width. Also mention `navbar.component.ts` and the Hamburger-Menu.

```html
<mat-toolbar color="primary">
  <mat-toolbar-row fxLayoutGap="10px">
    <div fxHide.gt-xs (click)="toggleMenu()" class="clickable" >
         <mat-icon color="accent">menu</mat-icon>
    </div>
```

- We will refactor `menu.service.ts` to the ngrx state later on
