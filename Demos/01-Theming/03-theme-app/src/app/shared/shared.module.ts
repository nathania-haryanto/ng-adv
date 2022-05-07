import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/side-bar.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IntroComponent } from './intro/intro.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const comps = [
  NavbarComponent,
  SideBarComponent,
  SidePanelComponent,
  FooterComponent,
  MarkdownRendererComponent,
  IntroComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: comps,
  exports: comps,
})
export class SharedModule {}
