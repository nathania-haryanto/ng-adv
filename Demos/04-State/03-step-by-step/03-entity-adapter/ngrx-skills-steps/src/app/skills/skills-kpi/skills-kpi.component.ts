import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { SkillsState } from "../store/reducers/skill.reducer";
import { getAllSkills } from "../store/selectors/skill.selector";

@Component({
  selector: "app-skills-kpi",
  templateUrl: "./skills-kpi.component.html",
  styleUrls: ["./skills-kpi.component.scss"]
})
export class SkillsKpiComponent implements OnInit {
  constructor(private store: Store<SkillsState>) {}

  ct = this.store.select(getAllSkills).pipe(map(arr => arr.length));

  ngOnInit() {}
}
