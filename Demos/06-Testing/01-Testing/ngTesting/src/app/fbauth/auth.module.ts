import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { FBLoginComponent } from './components/login/login.component';
import { FBLogoutComponent } from './components/logout/logout.component';
import { FBRegisterComponent } from './components/register/register.component';
import { AuthEffects } from './store/effects/auth.effects';
import { authFeatureKey, AuthReducer } from './store/reducers/auth.reducer';

const comps = [FBLoginComponent, FBRegisterComponent, FBLogoutComponent];

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
