import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private httpClient: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.httpClient
      .get<Topic[]>(environment.apiUrl + 'topics')
      .pipe(tap((data) => console.log('data from api', data)));
  }

  getTopic(id: number): Observable<Topic> {
    return this.httpClient.get<Topic>(environment.apiUrl + 'topics' + id);
  }

  insertTopic(t: Topic): Observable<any> {
    return this.httpClient.post<Topic>(environment.apiUrl + 'topics', t);
  }

  updateTopic(t: Topic): Observable<any> {
    return this.httpClient.put<Topic>(environment.apiUrl + 'topics', t);
  }

  deleteTopic(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'topics' + id);
  }
}
