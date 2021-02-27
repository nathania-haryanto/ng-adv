import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DemoItem } from "src/app/model/demo/DemoItem";

@Component({
  selector: "app-demo-row",
  templateUrl: "./demo-row.component.html",
  styleUrls: ["./demo-row.component.scss"]
})
export class DemoRowComponent implements OnInit {
  @Input() item: DemoItem;
  @Output() onDelete: EventEmitter<DemoItem> = new EventEmitter();
  @Output() onSlide: EventEmitter<DemoItem> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  delete() {
    this.onDelete.emit(this.item);
  }

  changeVisibility() {
    this.item.visible = !this.item.visible;
    this.onSlide.emit(this.item);
  }
}
