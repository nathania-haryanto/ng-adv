import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/components/login/login.component';
import { LogoutComponent } from '../auth/components/logout/logout.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

import { GlobalErrorsComponent } from './samples/global-errors/global-errors.component';
import { LocServiceComponent } from './samples/loc-service/loc-service.component';
import { MembersComponent } from './samples/multi-guard/members/members.component';
import { MultiGuardComponent } from './samples/multi-guard/multi-guard.component';
import { OnlyAuthenticatedGuard } from './samples/multi-guard/only-authenticated.guard';
import { OnlyPrimeMembersGuard } from './samples/multi-guard/only-prime-members.guard';
import { PrimeComponent } from './samples/multi-guard/prime/prime.component';
import { MultiInterceptorComponent } from './samples/multi-interceptor/multi-interceptor.component';
import { RoutingTargetComponent } from './samples/routing/routing-target/routing-target.component';
import { RoutingComponent } from './samples/routing/routing/routing.component';
import { DemosEffects } from './store/effects/demos.effects';
import { demosFeatureKey, DemosReducer } from './store/reducers/demos.reducer';
import { HttpErrorsComponent } from './samples/http-errors/http-errors.component';
import { DemoService } from './demo.service';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      {
        path: 'routing',
        component: RoutingComponent,
        children: [{ path: ':id', component: RoutingTargetComponent }],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'locationsrv',
        component: LocServiceComponent,
      },
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
      },
      {
        path: 'multi-interceptor',
        component: MultiInterceptorComponent,
      },
      {
        path: 'global-errors',
        component: GlobalErrorsComponent,
      },
      {
        path: 'http-errors',
        component: HttpErrorsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    RoutingComponent,
    RoutingTargetComponent,
    LocServiceComponent,
    MultiGuardComponent,
    MultiInterceptorComponent,
    GlobalErrorsComponent,
    MembersComponent,
    PrimeComponent,
    HttpErrorsComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    AuthModule,
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
