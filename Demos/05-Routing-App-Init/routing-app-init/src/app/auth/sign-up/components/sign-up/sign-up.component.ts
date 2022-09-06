import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements AfterViewInit {
  @ViewChild('dialog') template: TemplateRef<any>;

  constructor(private dialog: MatDialog, private router: Router) {}

  ngAfterViewInit() {
    const ref = this.dialog.open(this.template, {
      width: '350px',
    });

    ref.afterClosed().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
