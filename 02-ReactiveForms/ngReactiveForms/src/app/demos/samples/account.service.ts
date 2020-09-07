import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Account } from './model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${environment.apiUrl}accounts`);
  }

  getAccount(id: number): Observable<Account> {
    return this.getAccounts().pipe(
      map((v) => v.find((v: Account) => v.ID == id))
    );
  }
}
