import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { environment } from '../../environments/environment';

export const initFactory = (appinit: AppInitService) => {
  return () => appinit.loadData();
};

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private http: HttpClient) {}

  loadData() {
    return this.http
      .get<Customer[]>(environment.apiUrl + 'customers')
      .toPromise()
      .then((data) => console.log(data));
  }
}
