import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormControlStatus,
  Validators,
} from '@angular/forms';
import { combineLatest, distinct, map, Observable, tap } from 'rxjs';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
})
export class FormErrorsComponent implements OnInit {
  public skillForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(15)],
    ],
    skillsGrp: this.fb.array([]),
  });

  errors$: Observable<any> | undefined;

  constructor(private fb: FormBuilder, private ps: PersonService) {}

  ngOnInit() {
    this.subscribeChanges();
  }

  addSkill() {
    const skillsGrp = this.skillForm.controls.skillsGrp as FormArray;
    skillsGrp.push(
      this.fb.group({
        skillname: '',
        years: '',
      })
    );
  }

  saveForm() {
    console.log('form saved', this.skillForm);
  }

  getElementsInFormArray() {
    return (this.skillForm.controls.skillsGrp as FormArray).controls;
  }

  //Sample for custom Validator - name
  validateName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Hugo') {
      return { nameError: true };
    }
    return null;
  }

  //Form array no duplicates validator
  //TODO: implement no duplicates validator

  // Errors

  //TODO: write out all errors in a combined view
  private subscribeChanges() {
    this.errors$ = combineLatest([
      this.skillForm.valueChanges,
      this.skillForm.statusChanges.pipe(distinct()),
    ]).pipe(
      tap((form) => console.log('form', form))
      // map((el) => this.getFormErrors(el))
    );
  }

  private getFormErrors(
    form: [
      Partial<{
        name: string | null;
        skillsGrp: Partial<{
          skillname: string | null;
          years: number | null;
        }>[];
      }>,
      FormControlStatus
    ]
  ) {
    console.log('form', form);
  }

  private checkFormErrors(val_stat_changes: [{ form: any }, string]) {
    let state = val_stat_changes[1];
    let skill = val_stat_changes[0];
    let errors: any = { lastname: {} };
    if (state === 'INVALID') {
      let mod_fields = Object.keys(this.skillForm.controls);
      for (let el of mod_fields) {
        let fp = this.skillForm.get(el);
        if (fp && fp.invalid && (fp.dirty || fp.touched)) {
          errors[el] = fp.errors;
        }
      }
    }
    return errors;
  }
}
