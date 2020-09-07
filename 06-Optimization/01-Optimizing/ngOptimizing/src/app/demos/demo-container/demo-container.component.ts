import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, flatMap, map, tap } from 'rxjs/operators';
import { EventBusService } from 'src/app/shared/eventbus/event-bus.service';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { SidebarActions } from 'src/app/shared/sidebar/sidebar-actions';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../demo-item.model';
import { LoadDemos } from '../store/actions/demos.actions';
import { DemoState, getAllDemos } from '../store/reducers/demos.reducer';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss']
})
export class DemoContainerComponent implements OnInit {
  constructor(
    public ms: MenuService,
    private router: Router,
    private store: Store<DemoState>,
    private eb: EventBusService
  ) {}

  title: string = environment.title;
  header: string = 'Please select a demo';

  demos$: Observable<DemoItem[]> = this.store.select(getAllDemos);

  current: DemoItem = this.demos$ != null ? this.demos$[0] : null;
  workbench: any;

  showEditor: boolean = false;

  ngOnInit() {
    this.setMenu();
    this.setMetadata();
    this.getWorbenchStyle();
    this.setEditor();
  }

  setMenu() {
    this.store.dispatch(new LoadDemos());
  }

  setEditor() {
    this.eb.Commands.subscribe(action => {
      this.showEditor = action == SidebarActions.HIDE_MARKDOWN ? false : true;
    });
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.visible$.subscribe(visible => {
      result = visible
        ? {
            'margin-left': '10px'
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
          let childroute = evt.url.substr(evt.url.lastIndexOf('/') + 1);
          return this.demos$.pipe(
            map(items => items.find(i => i.url.includes(childroute)))
          );
        })
      )
      .subscribe(demo => {
        this.header =
          demo != null
            ? `Demo: ${demo.title} - Component: ${demo.component}`
            : 'Please select a demo';
      });
  }
}
