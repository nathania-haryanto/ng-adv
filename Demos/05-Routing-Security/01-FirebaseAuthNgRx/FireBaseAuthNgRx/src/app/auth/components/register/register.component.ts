import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { AuthFacade } from '../../store/facades/auth.facade';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private af: AuthFacade) {}

  registerForm: UntypedFormGroup;

  ngOnInit() {
    this.registerForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      passwords: new UntypedFormGroup(
        {
          password: new UntypedFormControl('', [
            Validators.required,
            Validators.minLength(4)
          ]),
          passwordRepeat: new UntypedFormControl('', [Validators.required])
        },
        { validators: this.passwordsMatch }
      )
    });
  }

  registerUser(form: UntypedFormGroup) {
    const usr = {
      email: form.value.email,
      password: form.value.passwords.password
    };
    this.af.register(usr);
  }

  passwordsMatch(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordRepeat').value) {
      return { invalid: true };
    }
  }
}
