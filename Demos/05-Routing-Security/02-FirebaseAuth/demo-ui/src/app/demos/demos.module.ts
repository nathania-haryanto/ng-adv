import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthModule } from '../fbauth/fbauth.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { FirebaseComponent } from './samples/firebase/firebase.component';
import { FirebaseAuthInterceptor } from '../fbauth/firebase/firebase-auth.interceptor';
import { MsalComponent } from './samples/msal/msal.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'firebase', component: FirebaseComponent },
      { path: 'msal', component: MsalComponent },
    ],
  },
];

@NgModule({
  declarations: [DemoContainerComponent, FirebaseComponent, MsalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FBAuthModule,
  ],
  providers: [
    DemoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseAuthInterceptor,
      multi: true,
    },
  ],
})
export class DemosModule {}
