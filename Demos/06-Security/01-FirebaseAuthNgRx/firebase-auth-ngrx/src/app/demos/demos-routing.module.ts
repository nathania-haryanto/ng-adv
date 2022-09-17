import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/components/login/login.component';
import { LogoutComponent } from '../auth/components/logout/logout.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';

const routes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
