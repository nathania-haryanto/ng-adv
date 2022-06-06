import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Update } from '@ngrx/entity';
import { Skill } from './skill.model';
import { environment } from '../../environments/environment';

@Injectable()
export class SkillsDataService extends DefaultDataService<Skill> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Skill', http, httpUrlGenerator);
  }

  getAll(): Observable<Skill[]> {
    return this.http.get(environment.skillsApi).pipe(
      map((data) => {
        const skills: Skill[] = [];
        for (let key in data) {
          skills.push({ ...data[key], id: key });
        }
        return skills;
      })
    );
  }

  add(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(environment.skillsApi, skill).pipe(
      map((data) => {
        return { ...skill, id: data.id };
      })
    );
  }

  update(skill: Update<Skill>): Observable<Skill> {
    return this.http.put<Skill>(`{{environment.skillsApi}}/${skill.id}`, {
      ...skill.changes,
    });
  }

  delete(id: string): Observable<string> {
    return this.http.delete(`{{environment.skillsApi}}/${id}`).pipe(
      map((data) => {
        return id;
      })
    );
  }
}
