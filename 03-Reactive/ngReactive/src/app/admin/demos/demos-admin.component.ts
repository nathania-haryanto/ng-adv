import { Component, OnInit } from "@angular/core";
import { Observable, combineLatest, BehaviorSubject } from "rxjs";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { DemoService } from "src/app/demos/demo.service";
import { map, tap } from "rxjs/operators";
import { DemoItem } from "src/app/model/demo/DemoItem";

@Component({
  selector: "app-demos-admin",
  templateUrl: "./demos-admin.component.html",
  styleUrls: ["./demos-admin.component.scss"]
})
export class DemosAdminComponent implements OnInit {
  constructor(private ds: DemoService) {}

  //Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getItems();

  //Action Stream
  filter: string;
  private filterSubject = new BehaviorSubject<string>("");
  filter$ = this.filterSubject.asObservable();

  //Stream to bind the view to
  demos$ = combineLatest([this.demosData$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter != ""
        ? demos.filter(d =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );

  ngOnInit() {}

  handleFilter() {
    this.filterSubject.next(this.filter);
  }

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe(arr => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach(item => {
      item.sortOrder = idx;
      console.log("new sort order:", item);
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    console.log("deleting item", item);
  }

  changeVisibility(item: DemoItem) {
    console.log("change visibility", item);
  }
}
