import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MaterialModule } from '../material.module';
import { AuthComponent } from './components/auth.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FBAuthRoutingModule } from './fbauth-routing.module';
import { AuthEffects } from './state/auth.effects';
import { authFeatureKey, reducer as AuthReducer } from './state/auth.reducer';

const comps = [LogoutComponent, AuthComponent];

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
    FBAuthRoutingModule,
    StoreModule.forFeature(authFeatureKey, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class FBAuthModule {}
