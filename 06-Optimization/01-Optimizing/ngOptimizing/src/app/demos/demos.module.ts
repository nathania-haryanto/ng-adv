import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { StoreModule } from '@ngrx/store';
import { demosFeatureKey, DemosReducer } from './store/reducers/demos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DemosEffects } from './store/effects/demos.effects';
import { AuthModule } from '../auth/auth.module';
import { LoggerComponent } from './samples/logger/logger.component';
import { BundlesComponent } from './samples/bundles/bundles.component';
import { ConsoleComponent } from './samples/console/console.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { WebWorkerComponent } from './samples/web-worker/web-worker.component';
import { SkillsListComponent } from './samples/change-detection/skills-list/skills-list.component';
import { SkillComponent } from './samples/change-detection/skill/skill.component';
import { DebugStatementsComponent } from './samples/debug-statements/debug-statements.component';
import { InjectConfigComponent } from './samples/inject-config/inject-config.component';
import { NgrxpushComponent } from './samples/ngrxpush/ngrxpush.component';
import { LighthouseComponent } from './samples/lighthouse/lighthouse.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';
import { NgforComponent } from './samples/ngfor/ngfor.component';
import { DynamicLoadingComponent } from './samples/dynamic-loading/dynamic-loading.component';
import { CodeSplittingComponent } from './samples/code-splitting/code-splitting.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'logger', component: LoggerComponent },
      { path: 'bundles', component: BundlesComponent },
      { path: 'inject-config', component: InjectConfigComponent },
      { path: 'webworker', component: WebWorkerComponent },
      { path: 'lighthouse', component: LighthouseComponent },
      { path: 'debug-statements', component: DebugStatementsComponent },
      { path: 'changedetection', component: ChangeDetectionComponent },
      { path: 'code-splitting', component: CodeSplittingComponent },
      { path: 'vscroll', component: VirtualScrollComponent },
      { path: 'ngfor', component: NgforComponent },
      {
        path: 'dynamic-loading',
        component: DynamicLoadingComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    LoggerComponent,
    BundlesComponent,
    ConsoleComponent,
    ChangeDetectionComponent,
    WebWorkerComponent,
    SkillsListComponent,
    SkillComponent,
    DebugStatementsComponent,
    InjectConfigComponent,
    NgrxpushComponent,
    LighthouseComponent,
    VirtualScrollComponent,
    NgforComponent,
    DynamicLoadingComponent,
    CodeSplittingComponent,
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
