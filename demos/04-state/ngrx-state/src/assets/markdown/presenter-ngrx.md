 A `Container-Presenter` pattern using NgRx is implemented in `skill-row.component.ts` and `skills-container.component.ts`. Point out the benefits of using this pattern.

```html
<div *ngFor="let sk of skills | async" class="item">
    <app-skill-row
        [skill]="sk"
        (itemDeleted)="deleteItem($event)"
        (itemCompleted)="toggleItemComplete($event)">
    </app-skill-row>
</div>
```