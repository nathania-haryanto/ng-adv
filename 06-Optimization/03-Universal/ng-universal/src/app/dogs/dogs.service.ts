import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  constructor(private httpClient: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>('assets/dogs.json');
  }

  getDog(id: number): Observable<Dog> {
    return this.getDogs().pipe(map((d) => d.find((d: Dog) => d.id == id)));
  }
}
