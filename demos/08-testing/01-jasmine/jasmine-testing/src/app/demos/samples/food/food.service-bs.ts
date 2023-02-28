import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceBS {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  private items: FoodItem[] = [];
  private Items: BehaviorSubject<FoodItem[]> = new BehaviorSubject(this.items);

  initData() {
    this.httpClient
      .get<FoodItem[]>(`${environment.apiUrl}food`)
      .subscribe((data) => {
        this.setState(data);
      });
  }

  private setState(data: any) {
    this.items = data;
    this.Items.next(this.items);
  }

  getItems(): Observable<FoodItem[]> {
    return this.Items.asObservable();
  }

  deleteItem(item: FoodItem): Observable<boolean> {
    this.items = this.items.filter((f) => _.isEqual(f, item) == false);
    this.Items.next(this.items);
    return of(true);
  }

  addItem(item: FoodItem): Observable<boolean> {
    this.items.push(item);
    this.Items.next(this.items);
    return of(true);
  }
}
