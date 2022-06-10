import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Person, wealthOptsValues } from '../person/person.model';
import { PersonService } from '../person/person.service';
import { PersonFormType } from '../person.form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.scss'],
})
export class FormsBuilderComponent implements OnInit {
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  personForm = new FormGroup<PersonFormType>({
    id: new FormControl(0),
    name: new FormControl(''),
    age: new FormControl(0),
    email: new FormControl(''),
    gender: new FormControl('male'),
    wealth: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      //Reminder: setValue vs patchValue
      this.personForm.patchValue(p);
      console.log('Data loaded from service', p);
    });

    this.personForm = this.fb.group({
      id: [this.person.id],
      name: [this.person.name, Validators.required],
      age: [this.person.age],
      gender: [this.person.gender],
      email: [this.person.email],
      wealth: [this.person.wealth],
    });

    setTimeout(() => {
      //Use this to update form incrementally
      this.personForm.patchValue({ name: 'Soi' });
      console.log('Cleo changed to Soi');
    }, 3000);
  }

  toggleId() {
    this.personForm.controls.id.disable();
  }

  savePerson(): void {
    this.ps.save(this.personForm as unknown as NgForm);
    console.log('Getting raw value of id:', this.personForm.getRawValue().id);
  }
}
