import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthEffects } from './state/auth.effects';
import { authFeatureKey, AuthReducer } from './state/auth.reducer';

const comps = [LoginComponent, RegisterComponent, LogoutComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    MaterialModule,
    StoreModule.forFeature(authFeatureKey, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class FBAuthModule {}
