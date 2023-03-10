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
import { A11yComponent } from './samples/a11y/a11y.component';
import { EslintComponent } from './samples/eslint/eslint.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'logger', component: LoggerComponent, title: 'Demos - Logger' },
      { path: 'bundles', component: BundlesComponent, title: 'Demos - Analyze Bundles' },
      { path: 'webworker', component: WebWorkerComponent, title: 'Demos - Web Workers' },
      { path: 'lighthouse', component: LighthouseComponent, title: 'Demos - Lighthouse KPIs' },
      { path: 'debug-statements', component: DebugStatementsComponent, title: 'Demos - Debug Statements' },
      { path: 'vscroll', component: VirtualScrollComponent, title: 'Demos - Virtual Scroll' },
      { path: 'ngfor', component: NgforComponent, title: 'Demos - NgFor' },
      { path: 'a11y', component: A11yComponent, title: 'Demos - A11y' },
      { path: 'eslint', component: EslintComponent, title: 'Demos - ESLint' },
      {
        path: 'dynamic-loading',
        component: DynamicLoadingComponent,
      },
    ],
  },
];
