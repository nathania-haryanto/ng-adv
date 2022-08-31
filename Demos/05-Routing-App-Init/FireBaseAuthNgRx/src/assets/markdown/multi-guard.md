Inspect Routing config in `demo.module.ts` and the use of Guards:

```typescript
{
    path: 'multi-guard',
    component: MultiGuardComponent,
    children: [
        { path: 'members', component: MembersComponent,
        canActivate: [OnlyAuthenticatedGuard],
        },
        { path: 'prime',component: PrimeComponent,
        canActivate: [OnlyAuthenticatedGuard, OnlyPrimeMembersGuard],
        },
```

Toggle Values in `simple-auth.service.ts` and use Buttons below to access routes:

```typescript
export class SimpleAuthService {
  ...
  isLoggedIn(): boolean {return true;}
  hasPrimeSubscription(): boolean {return false;}
}
```