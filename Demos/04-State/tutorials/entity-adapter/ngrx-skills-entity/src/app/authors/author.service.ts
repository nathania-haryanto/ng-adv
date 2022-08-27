import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private httpClient: HttpClient) {}

  getAuthors() {
    return this.httpClient.get<Author[]>(`${environment.api}authors`);
  }
}
