import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { FBAuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { AsyncComponent } from './samples/async/async.component';
import { SimpleAuthAsyncComponent } from './samples/async/simple-auth-async/simple-auth-async.component';
import { SimpleAuthDoneComponent } from './samples/async/simple-auth-done/simple-auth-done.component';
import { SimpleAuthFakeAsyncComponent } from './samples/async/simple-auth-fake-async/simple-auth-fake-async.component';
import { SimpleAuthWhenStableComponent } from './samples/async/simple-auth-async-when-stable/simple-auth-when-stable.component';
import { ComponentTestComponent } from './samples/component-test/component-test.component';
import { SimpleFoodComponent } from './samples/component-test/simple-food/simple-food.component';
import { DemoEditComponent } from './samples/demo-edit/demo-edit.component';
import { DemoFilterComponent } from './samples/demo-filter/demo-filter.component';
import { DemoListComponent } from './samples/demo-list/demo-list.component';
import { DemoRowComponent } from './samples/demo-row/demo-row.component';
import { HttpTestsComponent } from './samples/http-tests/http-tests.component';
import { FoodListComponent } from './samples/integration-tests/food-list/food-list.component';
import { FoodRowComponent } from './samples/integration-tests/food-row/food-row.component';
import { IntegrationTestComponent } from './samples/integration-tests/integration-test.component';
import { MarblesComponent } from './samples/marbles/marbles.component';
import { UserMarblesComponent } from './samples/marbles/user-marbles/user-marbles.component';
import { MockStoreComponent } from './samples/mock-store/mock-store.component';
import { NgrxComponent } from './samples/ngrx/ngrx.component';
import { PhonenumberPipe } from './samples/pipe/phonenumber.pipe';
import { RatingPipe } from './samples/pipe/rating.pipe';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';
import { UnitTestingComponent } from './samples/simple-tests/unit-testing.component';
import { MockAuthComponent } from './samples/use-mock/mock-auth/mock-auth.component';
import { UseMockComponent } from './samples/use-mock/use-mock.component';
import { DemosEffects } from './store/effects/demos.effects';
import { demosFeatureKey, DemosReducer } from './store/reducers/demos.reducer';
import { FoodHttpComponent } from './samples/http-tests/food-http/food-http.component';
import { DirectiveComponent } from './samples/directive/directive.component';
import { CapitalizeDirective } from './samples/directive/capitalize.directive';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { CypressComponent } from './samples/cypress/cypress.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'unittesting', component: UnitTestingComponent },
      { path: 'component-events', component: ComponentEventsComponent },
      { path: 'component-write', component: ComponentWriteComponent },
      { path: 'testpipe', component: TestPipeComponent },
      { path: 'directive', component: DirectiveComponent },
      { path: 'simpleservice', component: SimpleServiceComponent },
      { path: 'component-test', component: ComponentTestComponent },
      { path: 'integrationtests', component: IntegrationTestComponent },
      { path: 'mock', component: UseMockComponent },
      { path: 'httptests', component: HttpTestsComponent },
      { path: 'async', component: AsyncComponent },
      { path: 'marbles', component: MarblesComponent },
      { path: 'ngrx', component: NgrxComponent },
      { path: 'mockstore', component: MockStoreComponent },
      { path: 'cypress', component: CypressComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    DemoRowComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    UnitTestingComponent,
    TestPipeComponent,
    SimpleFoodComponent,
    IntegrationTestComponent,
    SimpleServiceComponent,
    TestPipeComponent,
    RatingPipe,
    FoodRowComponent,
    FoodListComponent,
    UseMockComponent,
    AsyncComponent,
    MarblesComponent,
    NgrxComponent,
    MockStoreComponent,
    PhonenumberPipe,
    SimpleAuthAsyncComponent,
    MockAuthComponent,
    ComponentTestComponent,
    UserMarblesComponent,
    SimpleAuthDoneComponent,
    SimpleAuthFakeAsyncComponent,
    SimpleAuthWhenStableComponent,
    HttpTestsComponent,
    FoodHttpComponent,
    DirectiveComponent,
    CapitalizeDirective,
    ComponentEventsComponent,
    CypressComponent,
    ComponentWriteComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    FBAuthModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, DemosReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [SkillsService],
})
export class DemosModule {}
