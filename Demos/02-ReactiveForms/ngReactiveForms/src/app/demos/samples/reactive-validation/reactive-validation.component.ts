import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { distinct, map } from 'rxjs/operators';
import { Person, wealthOptsValues } from '../person/person.model';
import { PersonService } from '../person/person.service';
import { AsyncMailExistsValidator } from './asyncMailExistsValidator';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss'],
})
export class ReactiveValidationComponent {
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  errors$: Observable<any> | undefined;
  personForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ps: PersonService,
    private mailExistsValidator: AsyncMailExistsValidator
  ) {
    this.personForm = this.fb.group({
      id: [this.person.id],
      name: [
        this.person.name,
        [Validators.required, Validators.minLength(4), this.validateName],
      ],
      lastname: [
        this.person.lastname,
        [Validators.required, this.validateLastName],
      ],
      age: [this.person.age, [Validators.min(18), Validators.max(99)]],
      gender: [this.person.gender],
      email: [
        this.person.email,
        [Validators.required, Validators.email],
        [this.mailExistsValidator],
        { updateOn: 'blur' },
      ],
      wealth: [this.person.wealth],
    });
  }

  ngOnInit() {
    this.loadData();
    this.subscribeChanges();
  }

  private loadData() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.patchValue(p);
    });
  }

  private subscribeChanges() {
    this.errors$ = combineLatest([
      this.personForm.valueChanges,
      this.personForm.statusChanges.pipe(distinct()),
    ]).pipe(map((el) => this.checkFormErrors(el)));
  }

  private checkFormErrors(val_stat_changes: [{ Person: any }, string]) {
    let state = val_stat_changes[1];
    let person = val_stat_changes[0];
    let errors: any = { lastname: {} };
    if (state === 'INVALID') {
      let mod_fields = Object.keys(this.personForm.controls);
      for (let el of mod_fields) {
        let fp = this.personForm.get(el);
        if (fp && fp.invalid && (fp.dirty || fp.touched)) {
          errors[el] = fp.errors;
        }
      }
    }
    return errors;
  }
  private logControl(name: string, control: FormControl) {
    let s = `${name} - pristine:${control.pristine} - dirty:${
      control.dirty
    } - touched:${control.touched} - untouched:${control.untouched} - value:${
      control.value
    } - status:${control.status} - valid:${control.valid} - invalid:${
      control.invalid
    } - errors:${JSON.stringify(control.errors)}`;
    console.log(s);
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }

  //Sample for custom Validator - name
  validateName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Hugo') {
      return { nameError: true };
    }
    return null;
  }

  //Sample for custom Validator - lastname
  validateLastName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Besenstiel') {
      return { nameError: true };
    }
    if (control.value?.length < 4 || control.value?.length > 15) {
      return { lengthError: true };
    }
    return null;
  }

  violatesMinLenght() {
    let result = false;
    if (this.personForm.controls['name'].errors != null) {
      console.log(
        'Errors in Name field: ',
        this.personForm.controls['name'].errors
      );
      if (this.personForm.controls['name'].errors['minlength']) {
        result = true;
      }
    }
    return result;
  }

  validateForm() {
    this.personForm.updateValueAndValidity();
    this.personForm.controls['name'].updateValueAndValidity();
  }
}
