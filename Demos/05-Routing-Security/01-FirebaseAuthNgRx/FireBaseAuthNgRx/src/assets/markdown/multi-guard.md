Inspect Routing config in `demo.module.ts`

```typescript
{
    path: 'multi-guard',
    component: MultiGuardComponent,
    children: [
        {
        path: 'members',
        component: MembersComponent,
        canActivate: [OnlyAuthenticatedGuard],
        },
        {
        path: 'prime',
        component: PrimeComponent,
        canActivate: [OnlyAuthenticatedGuard, OnlyPrimeMembersGuard],
        },
    ],
}
```

Toggle Values in `simple-auth.service.ts`
