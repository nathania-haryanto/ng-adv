import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Voucher } from './model';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.httpClient
      .get<Voucher[]>(environment.apiUrl + 'api/vouchers')
      .pipe(
        tap((data) => console.log('data received from api', data)),
        catchError(this.handleError)
      );
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.httpClient.get<Voucher>(
      environment.apiUrl + 'api/vouchers/' + id
    );
  }

  insertVoucher(voucher: Voucher): Observable<any> {
    return this.httpClient.post<Voucher>(
      environment.apiUrl + 'api/vouchers',
      voucher
    );
  }

  updateVoucher(voucher: Voucher): Observable<any> {
    return this.httpClient.put<Voucher>(
      environment.apiUrl + 'api/vouchers',
      voucher
    );
  }

  deleteVoucher(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'api/vouchers/' + id);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
