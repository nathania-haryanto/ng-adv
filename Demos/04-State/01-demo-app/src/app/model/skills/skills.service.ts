import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillBS } from './skills';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<SkillBS[]> {
    return this.httpClient
      .get<SkillBS[]>(`${environment.apiUrl}skills`)
      .pipe(tap((data) => console.log('data from api', data)));
  }

  getSkill(id: number): Observable<SkillBS> {
    return this.httpClient.get<SkillBS>(`${environment.apiUrl}skills${id}`);
  }

  insertSkill(skill: SkillBS): Observable<any> {
    return this.httpClient.post<SkillBS>(`${environment.apiUrl}skills`, skill);
  }

  updateSkill(skill: SkillBS): Observable<any> {
    return this.httpClient.put<SkillBS>(`${environment.apiUrl}skills`, skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}skills/${id}`);
  }
}
