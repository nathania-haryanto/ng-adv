import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from './task-item.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<TaskItem[]> {
    return this.httpClient
      .get<TaskItem[]>('http://localhost:3000/tasks')
      .pipe(delay(1000));
  }
}
