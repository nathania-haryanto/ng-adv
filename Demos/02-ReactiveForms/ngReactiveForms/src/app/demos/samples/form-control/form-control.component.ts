import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor() {}

  name = new FormControl('');
  postal = new FormControl('');
  city = new FormControl('');

  ngOnInit() {
    this.initForm();
    this.subscribeNameChanges();
  }

  initForm() {
    this.name = new FormControl('Giro', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.postal = new FormControl('3544');
    this.city = new FormControl('Idolsberg', [Validators.maxLength(15)]);
  }

  subscribeNameChanges() {
    this.name.valueChanges.subscribe((data) =>
      console.log('Form Control values changed', data)
    );
    this.name.statusChanges.subscribe((data) => {
      console.log('Form Control status changed', data);
      console.log('Form Control dirty', this.name.dirty);
      console.log('Form Control pristine', this.name.pristine);
      console.log('Form Control touched', this.name.touched);
    });
  }

  updateName() {
    console.log('updating');
    this.name.setValue('Soi the whippet');
  }

  resetName(name: string) {
    console.log('resetting');
    this.name.reset(name);
  }

  submitForm() {
    console.log('current name:', this.name.value);
  }
}
