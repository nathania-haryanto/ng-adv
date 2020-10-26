import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, combineLatest, merge } from 'rxjs';
import { distinct, distinctUntilChanged, map, mergeAll, mergeMap, tap } from 'rxjs/operators';
import { emptyPerson, wealthOpts } from '../empty-person';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { AsyncMailExistsValidator } from './asyncMailExistsValidator';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss'],
})
export class ReactiveValidationComponent implements OnInit {
  person: Person = { ...emptyPerson, lastname:null};
  wealthOpts = wealthOpts;

  personForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ps: PersonService,
    private mailExistsValidator: AsyncMailExistsValidator
  ) {}

  ngOnInit() {
    this.loadData();
    this.initForm();
    this.subscribeChanges();
  }

  private loadData() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.setValue(p);
    });
  }

  private initForm() {
    this.personForm = this.fb.group({
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

  errors :any = {lastname:{}};

  private subscribeChanges() {
    //this.personForm.valueChanges.subscribe((vals) => {
    //  console.log('changes happening @form: ', vals);
    //});

    combineLatest(
      [
        this.personForm.valueChanges,
        this.personForm.statusChanges.pipe(distinct())
      ]
    ).subscribe(el=>this.checkFormErrors(el))
  }

  private checkFormErrors(val_stat_changes:[{Person},string]) {
    let state = val_stat_changes[1]
    let person = val_stat_changes[0]
    if(state === 'INVALID') {
      let mod_fields = Object.keys(this.personForm.controls)
      for(let el of mod_fields) {
        let fp = this.personForm.get(el)
        console.log(fp)
        if(fp && fp.invalid && (fp.dirty || fp.touched)) {
          this.errors[el] = fp.errors
        }
      }
    } 
    //this.errors=next_val
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }

  //Sample for custom Validator - name
  validateName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Hugo') {
      return { nameError: true };
    }
    return null;
  }

  //Sample for custom Validator - lastname
  validateLastName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Besenstiel') {
      return { nameError: true };
    }
    if(control.value?.length<4 || control.value?.length>15) {
      return { lengthError: true}
    }
    return null;
  }

  violatesMinLenght() {
    let result = false;
    const errs: ValidationErrors = this.personForm.controls.name.errors;

    if (errs != null) {
      console.log('Errors in Name field: ', errs);
      if (errs.minlength) {
        result = true;
      }
    }
    return result;
  }

  validateForm() {
    this.personForm.updateValueAndValidity();
    this.personForm.controls.name.updateValueAndValidity();
  }
}
