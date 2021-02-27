import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-cascade',
  templateUrl: './reactive-cascade.component.html',
  styleUrls: ['./reactive-cascade.component.scss'],
})
export class ReactiveCascadeComponent implements OnInit {
  readonly selectValues = [
    { type: 'Frameworks', values: ['Angular', 'React', '.NET Core'] },
    { type: 'Languages', values: ['TypeScript', 'JavaScript', 'C#', 'Java'] },
  ];

  selects: string[];
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstNameInput: [''],
      lastNameInput: [''],
      optionGroups: this.fb.array([
        this.fb.group({
          selectInput: [''],
          whereInput: [''],
        }),
        this.fb.group({
          selectInput: [''],
          whereInput: [''],
        }),
      ]),
    });

    this.selects = [];
  }

  ngOnInit(): void {}

  saveProfileForm() {
    console.log(this.profileForm.value);
  }

  getCriteria(type) {
    const select = this.selectValues.find((_) => _.type == type);
    return select ? select.values : select;
  }

  getOptionGroups() {
    return (this.profileForm.controls['optionGroups'] as FormArray).controls;
  }
}
