import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopicsComponent } from "./topics/topics.component";
import { SkillsComponent } from "./skills/skills.component";
import { Routes, RouterModule } from "@angular/router";
import { AdminContainerComponent } from "./admin-container/admin-container.component";
import { MaterialModule } from "../material.module";
import { DemosAdminComponent } from "./demos/demos-admin.component";
import { FormsModule } from "@angular/forms";
import { DemoRowComponent } from "./demos/demo-row/demo-row.component";
import { UxModule } from "../ux/ux.module";

const adminRoutes: Routes = [
  {
    path: "",
    component: AdminContainerComponent,

    children: [
      { path: "topics", component: TopicsComponent },
      { path: "skills", component: SkillsComponent },
      { path: "demos", component: DemosAdminComponent }
    ]
  }
];

@NgModule({
  declarations: [
    TopicsComponent,
    SkillsComponent,
    AdminContainerComponent,
    DemosAdminComponent,
    DemoRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    MaterialModule,
    FormsModule,
    UxModule
  ]
})
export class AdminModule {}
