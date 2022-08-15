import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommentItem } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url = environment.apiUrl + 'comments';

  constructor(private http: HttpClient) {}

  saveComment(item: CommentItem) {
    if (item.id === undefined) {
      return this.http.post<CommentItem>(this.url, item);
    } else {
      return this.http.put<CommentItem>(`${this.url}/${item.id}`, item);
    }
  }

  getComments() {
    return this.http.get<CommentItem[]>(this.url);
  }

  getComment(id: number) {
    return this.http.get<CommentItem>(`${this.url}/${id}`);
  }
}
