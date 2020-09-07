import { Skill } from "../store/models/skill.model";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import {
  AddSkillAction,
  DeleteSkillAction,
  ToggleCompleteAction
} from "../store/actions/skill.actions";
import { Component, OnInit } from "@angular/core";
import { SkillsState } from "../store/reducers/skill.reducer";
import { getSkillData } from "../store/selectors/skill.selector";

@Component({
  selector: "app-skills-list",
  templateUrl: "./skills-list.component.html",
  styleUrls: ["./skills-list.component.scss"]
})
export class SkillsListComponent implements OnInit {
  constructor(private store: Store<SkillsState>) {}

  skills$: Observable<Array<Skill>> = this.store
    .select(getSkillData)
    .pipe(tap(data => console.log("data received from store", data)));
  title = "ngrxSkills";

  ngOnInit() {}

  addItem() {
    this.store.dispatch(
      new AddSkillAction({ id: "890", name: "schematics", completed: false })
    );
  }

  changeCompleted(skill) {
    this.store.dispatch(new ToggleCompleteAction(skill));
  }

  deleteItem(skill) {
    this.store.dispatch(new DeleteSkillAction(skill));
  }
}
