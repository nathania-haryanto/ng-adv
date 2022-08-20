import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../../demo-base/demo-item.model';

@Injectable({
  providedIn: 'root',
})
export class StatefulDemoService {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject<DemoItem[]>(
    []
  );

  private initData() {
    this.httpClient
      .get<DemoItem[]>(`${environment.apiUrl}demos`)
      .subscribe((data) => {
        this.demos.next(data);
      });
  }

  getDemos(): Observable<DemoItem[]> {
    return this.demos;
  }

  delete(item: DemoItem): Observable<any> {
    const arr = this.demos.getValue().filter((d) => d.id != item.id);
    // Emmit a marble containing the current array
    this.demos.next(arr);
    return EMPTY;
  }

  insert(item: DemoItem): Observable<any> {
    const arr = this.demos.getValue();
    arr.push(item);
    // Emmit a marble containing the current array
    this.demos.next(arr);
    return EMPTY;
  }
}
