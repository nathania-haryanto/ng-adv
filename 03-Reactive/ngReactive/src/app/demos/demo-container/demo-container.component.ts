import { Component, OnInit } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";
import { filter, flatMap, map } from "rxjs/operators";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { MenuService } from "src/app/shared/menu/menu.service";
import { DemoService } from "../demo.service";
import { environment } from "src/environments/environment";
import { EventBusService } from "src/app/shared/eventbus/event-bus.service";
import { SidebarActions } from "src/app/shared/sidebar/sidebar-actions";
import { DemoItem } from "src/app/model/demo/DemoItem";

@Component({
  selector: "app-demo-container",
  templateUrl: "./demo-container.component.html",
  styleUrls: ["./demo-container.component.scss"]
})
export class DemoContainerComponent implements OnInit {
  constructor(
    public ms: MenuService,
    private router: Router,
    private ds: DemoService,
    private eb: EventBusService
  ) {}

  title: string = environment.title;
  header: string = "Please select a demo";
  workbench: any;

  showEditor: boolean = false;

  filter: string;
  private filterSubject = new BehaviorSubject<string>("");
  filter$ = this.filterSubject.asObservable();

  demosData$: Observable<DemoItem[]> = this.ds.getItems();

  demos$ = combineLatest([this.demosData$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter != ""
        ? demos.filter(d =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );

  current: DemoItem = this.demos$ != null ? this.demos$[0] : null;

  ngOnInit() {
    this.setMetadata();
    this.getWorbenchStyle();
    this.setEditor();
  }

  setEditor() {
    this.eb.Commands.subscribe(action => {
      this.showEditor = action == SidebarActions.HIDE_MARKDOWN ? false : true;
    });
  }

  handleFilter() {
    this.filterSubject.next(this.filter);
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.visible$.subscribe(visible => {
      result = visible
        ? {
            "margin-left": "10px"
          }
        : {};
    });
    return result;
  }

  private setMetadata() {
    this.router.events
      .pipe(
        filter((evt: Event) => evt instanceof NavigationEnd),
        flatMap((evt: NavigationEnd) => {
          let childroute = evt.url.substr(evt.url.lastIndexOf("/") + 1);
          return this.demos$.pipe(
            map(items => items.find(i => i.url.includes(childroute)))
          );
        })
      )
      .subscribe(demo => {
        this.header =
          demo != null
            ? `Demo: ${demo.title} - Component: ${demo.component}`
            : "Please select a demo";
      });
  }
}
