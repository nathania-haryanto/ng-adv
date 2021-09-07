import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { SkillFacade } from "../store/facades/skill.facades";

@Component({
  selector: "app-skills-kpi",
  templateUrl: "./skills-kpi.component.html",
  styleUrls: ["./skills-kpi.component.scss"]
})
export class SkillsKpiComponent implements OnInit {
  constructor(private sf: SkillFacade) {}

  ct = this.sf.getSkills().pipe(map(arr => arr.length));

  ngOnInit() {}
}
