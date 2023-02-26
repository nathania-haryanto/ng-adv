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
    private ts: ThemeService,
  ) { }

  editorDisplayed: boolean = false;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    if (this.editorDisplayed) {
      this.eb.triggerCmd(SidebarActions.HIDE_MARKDOWN);
    } else {
      this.eb.triggerCmd(SidebarActions.SHOW_MARKDOWN);
    }
    this.editorDisplayed = !this.editorDisplayed;
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Uploading to Cloud');
  }
}
