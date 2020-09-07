import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemoItem } from './demo-item.model';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getDemos(): Observable<DemoItem[]> {
    return this.httpClient.get<DemoItem[]>(`${environment.apiUrl}demos`);
  }

  delete(item: DemoItem) {
    return this.httpClient.delete(`${environment.apiUrl}demos/${item.id}`);
  }
}
