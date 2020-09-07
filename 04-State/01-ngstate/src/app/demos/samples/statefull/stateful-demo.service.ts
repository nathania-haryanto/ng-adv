import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../../demo-item.model';

@Injectable({
  providedIn: 'root',
})
export class StatefulDemoService {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  private arrDemos: DemoItem[] = [];
  private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject(
    this.arrDemos
  );

  private initData() {
    this.httpClient
      .get<DemoItem[]>(`${environment.apiUrl}demos`)
      .subscribe((data) => {
        this.arrDemos = data;
        this.demos.next(this.arrDemos);
      });
  }

  getDemos(): Observable<DemoItem[]> {
    return this.demos;
  }

  delete(item: DemoItem): Observable<any> {
    this.arrDemos = this.arrDemos.filter((d) => d.id != item.id);
    this.demos.next(this.arrDemos);
    return EMPTY;
  }

  insert(item: DemoItem): Observable<any> {
    this.arrDemos.push(item);
    this.demos.next(this.arrDemos);
    return EMPTY;
  }
}
