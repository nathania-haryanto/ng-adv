import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SkillsState } from "src/app/model/skills/statefull-skills.service";
import { Skill } from "src/app/model/skills/skills";

@Component({
  selector: "app-stateful",
  templateUrl: "./stateful.component.html",
  styleUrls: ["./stateful.component.scss"]
})
export class StatefulComponent implements OnInit {
  dataSource: MatTableDataSource<Skill>;
  displayedColumns = [
    "id",
    "topicId",
    "name",
    "hours",
    "completed",
    "duedate",
    "editItem"
  ];

  constructor(private state: SkillsState) {}

  ngOnInit() {
    this.state.getAllSkills().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row) {
    console.log("Edit Row", row);
  }
}
