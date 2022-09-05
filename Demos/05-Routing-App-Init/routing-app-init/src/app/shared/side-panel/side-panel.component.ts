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

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    this.sns.displayAlert('Mock', 'Show Editor');
  }

  showUpload() {
    this.sns.displayAlert('Mock', 'Uploading to Cloud');
  }
}
