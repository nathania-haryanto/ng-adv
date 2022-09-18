import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
})
export class FormErrorsComponent implements OnInit {
  public skillForm = this.fb.group({
    name: 'Giro',
    skillsGrp: this.fb.array([
      this.fb.group({ skillname: 'Hunting', years: 9 }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

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
}
