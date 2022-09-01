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

Toggle Values in `mock-auth.service.ts` and use Buttons below to access routes. Mock member state is kept in NgRx:

```typescript
export class MockAuthService {
  constructor(private af: AppFacade) {}
  ...
  isLoggedIn() {return this.af.getIsLoggedIn();}
  hasPrimeSubscription() {return this.af.getPrimeMember();}
}
```