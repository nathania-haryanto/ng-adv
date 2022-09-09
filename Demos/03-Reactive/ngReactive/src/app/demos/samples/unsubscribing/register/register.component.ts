import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor() {}

  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(4)],
        nonNullable: true,
      }),
      passwordRepeat: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    },
    {
      updateOn: 'blur',
      validators: [this.passwordsMatchValidator],
    }
  );

  registerUser(form: FormGroup) {
    const usr = {
      email: form.value.email,
      password: form.value.passwords.password,
    };
    console.log('Form: ', form);
    console.log('User to register: ', usr);
  }

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const pwd = control.get('password')?.value;
    const repeat = control.get('passwordRepeat')?.value;
    return pwd && repeat && pwd === repeat ? null : { passwordMismatch: true };
  }
}
