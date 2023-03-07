import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TaskItem } from './task-item.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) { }

  getTasks() {
    return this.httpClient
      .get<TaskItem[]>('http://localhost:3000/tasks')
      .pipe(delay(1000));
  }
}
