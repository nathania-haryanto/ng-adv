import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, QuicklinkModule],
  exports: [QuicklinkStrategy],
})
export class SharedModule {}
