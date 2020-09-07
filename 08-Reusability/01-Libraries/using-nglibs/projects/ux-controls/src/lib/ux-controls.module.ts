import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SplitComponent } from './controls/split/split.component';

const comps = [SplitComponent];

@NgModule({
  declarations: comps,
  imports: [MatToolbarModule, FlexLayoutModule],
  exports: comps
})
export class UxControlsModule { }
