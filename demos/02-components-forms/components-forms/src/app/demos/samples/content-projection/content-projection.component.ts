import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SplitPopupComponent } from './split-popup/split-popup.component';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
})
export class ContentProjectionComponent implements OnInit {
  isDisabled = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openPopup(): void {
    const dialogRef = this.dialog.open(SplitPopupComponent, {
      width: '90vw',
      data: { main: 'this is main', toolbar: 'toolbar' },
    });
  }
}
