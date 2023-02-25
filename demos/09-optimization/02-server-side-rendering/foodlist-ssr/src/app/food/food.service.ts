import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItem } from './food-item.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get<FoodItem[]>(environment.api);
  }
}
