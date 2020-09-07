import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Skill } from "./store/models/skill.model";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(environment.apiUrl);
  }

  addSkill(skill: Skill) {
    return this.httpClient.post<Skill>(environment.apiUrl, skill);
  }

  deleteSkill(skill: Skill) {
    return this.httpClient.delete(`${environment.apiUrl}/${skill.id}`);
  }
}
