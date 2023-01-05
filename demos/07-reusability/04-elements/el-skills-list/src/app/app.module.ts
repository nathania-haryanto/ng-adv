import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { SkillsListComponent } from './skills-list/skills-list.component';

// @NgModule({
//   declarations: [AppComponent, SkillsListComponent],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { createCustomElement } from '@angular/elements';
import { SkillsListComponent } from './skills-list/skills-list.component';

@NgModule({
  declarations: [SkillsListComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [SkillsListComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(SkillsListComponent, {
      injector: this.injector,
    });

    customElements.define('ng-skills', el);
  }
}
