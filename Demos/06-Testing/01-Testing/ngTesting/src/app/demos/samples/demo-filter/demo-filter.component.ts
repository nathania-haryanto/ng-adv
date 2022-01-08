import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { debounceTime } from "rxjs/operators";
import { SetFilter } from "../../store/actions/demos.actions";
import { DemoState } from "../../store/reducers/demos.reducer";

@Component({
  selector: "app-demo-filter",
  templateUrl: "./demo-filter.component.html",
  styleUrls: ["./demo-filter.component.scss"]
})
export class DemoFilterComponent implements OnInit {
  constructor(private store: Store<DemoState>) {}

  fcFilter = new FormControl();

  ngOnInit() {
    this.handleFilterChange();
  }

  handleFilterChange() {
    this.fcFilter.valueChanges.pipe(debounceTime(350)).subscribe(filter => {
      this.store.dispatch(new SetFilter(filter));
    });
  }
}
