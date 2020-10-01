import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  exports: [MatButtonModule, MatIconModule, FlexLayoutModule],
})
export class MaterialModule {}
