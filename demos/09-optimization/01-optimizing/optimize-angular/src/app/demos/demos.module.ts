import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { MarkdownEditorModule } from '../shared/markdown-editor/markdown-editor.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { demoRoutes } from './demo.routing.module';
import { BundlesComponent } from './samples/bundles/bundles.component';
import { ConsoleComponent } from './samples/console/console.component';
import { DebugStatementsComponent } from './samples/debug-statements/debug-statements.component';
import { DynamicLoadingComponent } from './samples/dynamic-loading/dynamic-loading.component';
import { SimpleComponent } from './samples/dynamic-loading/simple.component';
import { InjectConfigComponent } from './samples/inject-config/inject-config.component';
import { LighthouseComponent } from './samples/lighthouse/lighthouse.component';
import { LoggerComponent } from './samples/logger/logger.component';
import { NgforComponent } from './samples/ngfor/ngfor.component';
import { NgrxpushComponent } from './samples/ngrxpush/ngrxpush.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';
import { WebWorkerComponent } from './samples/web-worker/web-worker.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';
import { A11yComponent } from './samples/a11y/a11y.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    LoggerComponent,
    BundlesComponent,
    ConsoleComponent,
    WebWorkerComponent,
    DebugStatementsComponent,
    InjectConfigComponent,
    NgrxpushComponent,
    LighthouseComponent,
    VirtualScrollComponent,
    NgforComponent,
    DynamicLoadingComponent,
    SimpleComponent,
    A11yComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule,
    MarkdownEditorModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [],
})
export class DemosModule { }
