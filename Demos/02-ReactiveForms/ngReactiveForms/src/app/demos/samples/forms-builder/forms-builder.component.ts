import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person.model';
import { emptyPerson, wealthOpts } from '../empty-person';
import { PersonService } from '../person.service';

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
      //Use this to update the whole form
      this.personForm.setValue(p);
      console.log('Data loaded from service', p);
    });

    this.personForm = this.fb.group({
      name: [this.person.name, Validators.required],
      age: [this.person.age],
      gender: [this.person.gender],
      email: [this.person.email],
      wealth: [this.person.wealth],
    });

    setTimeout(() => {
      //Use this to update form incrementally
      this.personForm.patchValue({ name: 'Heinrich' });
      console.log('Heinz changed to Heinrich');
    }, 3000);
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
