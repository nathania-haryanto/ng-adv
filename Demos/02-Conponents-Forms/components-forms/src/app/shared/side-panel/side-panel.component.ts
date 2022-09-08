import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { SidePanelService } from './sidepanel.service';
import { SidebarActions } from './sidebar.actions';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  constructor(
    private sns: SnackbarService,
    private eb: SidePanelService,
    private ts: ThemeService
  ) {}

  editorDisplayed: boolean = false;

  ngOnInit() {}

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    this.eb.triggerCmd(
      this.editorDisplayed
        ? SidebarActions.SHOW_MARKDOWN
        : SidebarActions.HIDE_MARKDOWN
    );
    this.editorDisplayed = !this.editorDisplayed;
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }
}
