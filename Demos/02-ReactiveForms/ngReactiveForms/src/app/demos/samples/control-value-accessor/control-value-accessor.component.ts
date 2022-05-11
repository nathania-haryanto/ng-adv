import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss'],
})
export class ControlValueAccessorComponent implements OnInit {
  cartItemForm: FormGroup;
  cartItem = { itemName: 'sunflower oil', quantity: 4 };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartItemForm = this.fb.group({
      itemName: [this.cartItem.itemName, Validators.required],
      quantity: [this.cartItem.quantity, Validators.max(5)],
    });
  }

  submitItem(form) {
    console.log('Items in cart:', form);
  }
}
