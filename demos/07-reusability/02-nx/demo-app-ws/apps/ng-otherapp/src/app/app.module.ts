import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UxControlsModule } from 'libs/ux-controls/src/lib/ux-controls.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UxControlsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
