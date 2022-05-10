import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoRoutingModule } from './demo.routing.module';
import { CardComponent } from './samples/card/card.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { SplitSampleComponent } from './samples/content-projection/split-sample/split-sample.component';
import { PopupContainerComponent } from './samples/popup-container/popup-container.component';
import { PopupComponent } from './samples/popup-container/popup/popup.component';
import { TableComponent } from './samples/table/table.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    CardComponent,
    ContentProjectionComponent,
    PopupContainerComponent,
    PopupComponent,
    SplitSampleComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [SkillsService],
})
export class DemosModule {}
