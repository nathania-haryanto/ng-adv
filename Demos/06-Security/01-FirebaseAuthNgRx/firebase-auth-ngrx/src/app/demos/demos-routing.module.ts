import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { FirebaseAuthComponent } from './samples/firebase-auth/firebase-auth.component';

const routes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      {
        path: 'fb-auth-basics',
        component: FirebaseAuthComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
