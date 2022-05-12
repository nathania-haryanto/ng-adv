import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person/person.model';
import { emptyPerson, wealthOpts } from '../empty-person';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.scss'],
})
export class FormsBuilderComponent implements OnInit {
  personForm: FormGroup;
  person: Person = emptyPerson;
  wealthOpts = wealthOpts;

  constructor(private fb: FormBuilder, private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      //Reminder: setValue vs patchValue
      this.personForm.patchValue(p);
      console.log('Data loaded from service', p);
    });

    this.personForm = this.fb.group({
      id: [this.person.name],
      name: [this.person.name, Validators.required],
      lastname: [this.person.lastname, Validators.required],
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

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
