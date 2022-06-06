- Show the use of Store<SkillsState>, explain the simplified @ngrx/data approach
- Show registration in app.module.ts:

    ```typescript
    @NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        ...
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
    ```    

- Explain `skills.service.ts` and `skills-data.service.ts`:

    ```typescript
    @Injectable({providedIn: 'root'})
    export class SkillsService extends EntityCollectionServiceBase<Skill> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Skill', serviceElementsFactory);
    ```

- Show registration in skill.module.ts and explain constructor:

    ```typescript
    export class SkillsModule {
    constructor(
        eds: EntityDefinitionService,
        entityDataService: EntityDataService,
        SkillsDataService: SkillsDataService
    ) {
        eds.registerMetadataMap(entityMetadata);
        entityDataService.registerService('Skill', SkillsDataService);
    ```
- Discuss initial loading in `skills-container.component.ts`