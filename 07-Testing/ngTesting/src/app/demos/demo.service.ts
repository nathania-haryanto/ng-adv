import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemoItem } from './demo-item.model';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getDemos() {
    return this.httpClient.get<DemoItem[]>(`${environment.api}demos`);
  }

  delete(item: DemoItem) {
    return this.httpClient.delete(`${environment.api}demos/${item.id}`);
  }

  addDemo(item: DemoItem) {
    return this.httpClient.post<DemoItem>(`${environment.api}demos`, item);
  }
}
