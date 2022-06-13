import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxSplitComponent } from './ux-split/ux-split.component';
import { MaterialModule } from './material/material.module';
import { UxButtonComponent } from './ux-button/ux-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [UxSplitComponent, UxButtonComponent],
  exports: [UxSplitComponent, UxButtonComponent],
})
export class UxControlsModule {}
