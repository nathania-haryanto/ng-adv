import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements AfterViewInit {
  @ViewChild('dialog') template: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private as: AuthService
  ) {}

  ngAfterViewInit() {
    const ref = this.dialog.open(this.template, {
      width: '350px',
    });

    ref.afterClosed().subscribe(() => {
      this.router.navigate(['']);
    });
  }

  signIn() {
    this.as.login('mockUser');
  }
}
