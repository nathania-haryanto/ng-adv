import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassicThemingComponent } from './classic-theming/classic-theming.component';
import { AlternativeThemingComponent } from './alternative-theming/alternative-theming.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicThemingComponent,
    AlternativeThemingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
