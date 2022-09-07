import { NgModule } from '@angular/core';
import { SplitComponent } from './controls/split/split.component';

const comps = [SplitComponent];

@NgModule({
  declarations: [comps],
  imports: [],
  exports: comps,
})
export class UxControlsModule {}
