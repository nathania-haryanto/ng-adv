import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToogleSidenavComponent } from './components/toogle-sidenav/toogle-sidenav.component';
import { ToogleSidenavMenuComponent } from './components/toogle-sidenav-menu/toogle-sidenav-menu.component';
import { ToogleSidenavContainerComponent } from './components/toogle-sidenav-container/toogle-sidenav-container.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatSidenavModule],
  declarations: [ToogleSidenavComponent, ToogleSidenavMenuComponent, ToogleSidenavContainerComponent],
})
export class ToggleSidenavModule {}
