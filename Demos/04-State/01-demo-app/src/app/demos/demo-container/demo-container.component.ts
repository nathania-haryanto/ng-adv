import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MenuService } from '../../shared/menu/menu.service';
import { SidebarActions } from '../../shared/side-panel/sidebar.actions';
import { SidePanelService } from '../../shared/side-panel/sidepanel.service';
import { DemoItem } from '../demo-base/demo-item.model';
import { DemoFacade } from '../state/demo.facade';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  constructor(
    public ms: MenuService,
    private router: Router,
    private df: DemoFacade,
    private sidep: SidePanelService
  ) {}

  title: string = environment.title;
  header = 'Please select a demo';
  isLoading = true;

  demos$ = this.df.getDemos();
  current: DemoItem = this.demos$ != null ? this.demos$[0] : null;

  menuVisible$ = this.ms.visible$;
  // menuPosition$ = this.ms.sideNavPosition;
  sidenavMode: MatDrawerMode = 'side';

  showEditor$ = this.sidep
    .getCommands()
    .pipe(
      map((action) => (action === SidebarActions.HIDE_MARKDOWN ? false : true))
    );

  ngOnInit() {
    this.df.initData();
    this.setMetadata();
    this.getWorbenchStyle();
  }

  setMenuPosition() {
    this.ms.position$.subscribe(
      (mode: any) => (this.sidenavMode = mode as MatDrawerMode)
    );
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.visible$.subscribe((visible) => {
      result = visible
        ? {
            'margin-left': '10px',
          }
        : {};
    });
    return result;
  }

  private setMetadata() {
    this.router.events
      .pipe(
        filter((evt: Event) => evt instanceof NavigationEnd),
        mergeMap((evt: NavigationEnd) => {
          const childroute = evt.url.substr(evt.url.lastIndexOf('/') + 1);
          return this.demos$.pipe(
            map((items) => items.find((i) => i.url.includes(childroute)))
          );
        })
      )
      .subscribe((demo) => {
        this.header =
          demo != null
            ? `Demo: ${demo.title} - Component: ${demo.component}`
            : 'Please select a demo';
      });
  }
}
