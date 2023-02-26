import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { BundlesComponent } from './samples/bundles/bundles.component';
import { DebugStatementsComponent } from './samples/debug-statements/debug-statements.component';
import { DynamicLoadingComponent } from './samples/dynamic-loading/dynamic-loading.component';
import { InjectConfigComponent } from './samples/inject-config/inject-config.component';
import { LighthouseComponent } from './samples/lighthouse/lighthouse.component';
import { LoggerComponent } from './samples/logger/logger.component';
import { NgforComponent } from './samples/ngfor/ngfor.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';
import { WebWorkerComponent } from './samples/web-worker/web-worker.component';

export const demoRoutes: Routes = [
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
      { path: 'vscroll', component: VirtualScrollComponent },
      { path: 'ngfor', component: NgforComponent },
      {
        path: 'dynamic-loading',
        component: DynamicLoadingComponent,
      },
    ],
  },
];
