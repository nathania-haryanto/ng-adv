import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FoodItem } from '../food-item.model';
import { MatCardModule } from "@angular/material/card";
import { NgOptimizedImage } from '@angular/common';
import { EuroPipe } from '../euro.pipe';
import { NumberPickerComponent } from '../number-picker/number-picker.component';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, NgOptimizedImage, EuroPipe, NumberPickerComponent]
})
export class ShopItemComponent {
  @Input() food: FoodItem = new FoodItem();
  @Input() inCart: number | null = 0;

  nbrPicker: FormControl = new FormControl(this.inCart);

  constructor() { }

  ngOnChanges() {
    this.nbrPicker.setValue(this.inCart);
  }

  handleAmountChange(amount: number) {
    console.log('handleAmountChange', amount);
  }
}
