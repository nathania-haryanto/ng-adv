import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UxSplitComponent } from './ux-split/ux-split.component';
import { UxButtonComponent } from './ux-button/ux-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  declarations: [UxSplitComponent, UxButtonComponent],
  exports: [UxSplitComponent, UxButtonComponent],
})
export class UxControlsModule {}
