import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  FooterComponent,
  MarkdownRendererComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule {}
