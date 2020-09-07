import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { emptyPerson, wealthOpts } from '../empty-person';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private ps: PersonService) {}

  personForm: FormGroup;
  person: Person = emptyPerson;
  wealthOpts = wealthOpts;

  ngOnInit() {
    this.initForm();
    this.subscribeFormChanges();
  }

  initForm() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.setValue(p);
    });

    this.personForm = new FormGroup({
      name: new FormControl(this.person.name, Validators.required),
      age: new FormControl(this.person.age),
      email: new FormControl(this.person.email),
      gender: new FormControl(this.person.gender),
      wealth: new FormControl(this.person.wealth),
    });
  }

  subscribeFormChanges() {
    this.personForm.valueChanges.subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.personForm.statusChanges.subscribe((data) =>
      console.log('Form status changed', data)
    );
    if (this.personForm.errors) {
      this.personForm.errors.subscribe((data) =>
        console.log('Form errors:', data)
      );
    }
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
