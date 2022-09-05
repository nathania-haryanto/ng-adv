Data preloading using @ngrx/data in `skills.module.ts`. Examine `skill.resolver.ts` and `skill.resolver.ts`. Data is loaded only once:

```typescript
@Injectable({
  providedIn: 'root',
})
export class SkillsResolver implements Resolve<boolean> {
  constructor(private skillsService: SkillsEntityService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.skillsService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.skillsService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
```