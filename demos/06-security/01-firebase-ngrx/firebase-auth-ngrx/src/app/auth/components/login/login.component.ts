import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginCredentials } from '../../credential.model';
import { FBAuthService } from '../../fbauth.service';
import { combineLatestWith, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('dialog')
  template!: TemplateRef<any>;

  constructor(
    private as: FBAuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.dialog
      .open(this.template, { width: '350px' })
      .afterClosed()
      .pipe(
        combineLatestWith(this.as.isAuthenticated()),
        map(([close, isAuthenticated]) => {
          if (isAuthenticated) {
            this.router.navigate(['demos']);
          } else {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  logIn(form: FormGroup) {
    let vm: LoginCredentials = form.value;
    this.as.logIn(vm.email, vm.password);
    this.dialog.closeAll();
  }
}
