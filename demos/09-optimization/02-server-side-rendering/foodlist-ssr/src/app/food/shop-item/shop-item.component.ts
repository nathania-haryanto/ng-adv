import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FoodItem, FoodCartItem } from '../food-item.model';
import { MatCardModule } from "@angular/material/card";
import { NgOptimizedImage } from '@angular/common';
import { EuroPipe } from '../euro.pipe';
import { NumberPickerComponent } from '../number-picker/number-picker.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, RouterModule, MatIconModule, NgOptimizedImage, EuroPipe, NumberPickerComponent]
})
export class ShopItemComponent {
  @Input() food: FoodItem = new FoodItem();
  @Input() inCart: number | null = 0;
  @Output() itemChanged: EventEmitter<FoodCartItem> = new EventEmitter<FoodCartItem>();

  nbrPicker: FormControl = new FormControl(this.inCart);

  constructor() { }

  ngOnChanges() {
    this.nbrPicker.setValue(this.inCart);
  }

  handleAmountChange(amount: number) {
    const item: FoodCartItem = { ...this.food, quantity: amount };
    this.itemChanged.emit(item);
  }
}
