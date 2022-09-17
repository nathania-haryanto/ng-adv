import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { combineLatestWith, map } from 'rxjs/operators';
import { FBAuthService } from '../../fbauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        passwordRepeat: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordsMatch }
    ),
  });

  registerUser(form: FormGroup) {
    this.as.createUser(form.value.email, form.value.passwords.password);
  }

  passwordsMatch(c: AbstractControl): { invalid: boolean } | null {
    if (c.get('password')?.value !== c.get('passwordRepeat')?.value) {
      return { invalid: true };
    }
    return null;
  }
}
