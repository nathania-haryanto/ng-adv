import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { LoginComponent } from './samples/firebase/components/login/login.component';
import { RegisterComponent } from './samples/firebase/components/register/register.component';
import { FirebaseComponent } from './samples/firebase/firebase.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [{ path: 'firebase', component: FirebaseComponent }],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    FirebaseComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
  ],
  providers: [DemoService],
})
export class DemosModule {}
