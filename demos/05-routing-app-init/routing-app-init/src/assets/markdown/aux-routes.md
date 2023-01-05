Notice the `authEnabled`-flag in `environment.ts` and the named actions-outlet in app.component.ts:

```html
<div gdArea="main">
    <router-outlet></router-outlet>
    <router-outlet name="actions"></router-outlet>
</div>
```

Examine `auth/auth.module.ts` and its content, the mock `auth.service.ts` and the routes in `auth-routing.module.ts`. Notice the following html in `intro.component.html`:

```html
<mat-card-actions>
<div *ngIf="isAuthenticated">
    <button mat-raised-button routerLink="/demos" color="primary">Proceed</button>
</div>
<div *ngIf="!isAuthenticated">
    <button mat-raised-button color="primary"
        [routerLink]="[{ outlets: { actions: ['auth', 'sign-in'] } }]"    
        >Sign In</button>
    <button mat-raised-button color="primary"
        [routerLink]="[{ outlets: { actions: ['auth', 'sign-up'] } }]"    
        >Sign Up</button>
</div>
</mat-card-actions>
```

Toogle `authEnabled` in `environment.ts` and try to understand the authentication process and it's use of the `actions-outlet`