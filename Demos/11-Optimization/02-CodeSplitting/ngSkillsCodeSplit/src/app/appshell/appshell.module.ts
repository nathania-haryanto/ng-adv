import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppshellRoutingModule } from './appshell-routing.module';
import { AppshellComponent } from './appshell.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AppshellComponent],
  imports: [CommonModule, AppshellRoutingModule, QuicklinkModule],
})
export class AppshellModule {}
