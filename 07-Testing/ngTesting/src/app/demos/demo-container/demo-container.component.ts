import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventBusService } from 'src/app/shared/eventbus/event-bus.service';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { SidebarActions } from 'src/app/shared/sidebar/sidebar-actions';
import { environment } from 'src/environments/environment';
import { RouterFacadeService } from '../../store/facades/router-facade.service';
import { DemoFacade } from '../store/facades/demo.facade';
import { MenuFacade } from '../../store/facades/menu.facade';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  constructor(
    public mf: MenuFacade,
    public router: RouterFacadeService,
    private df: DemoFacade,
    private eb: EventBusService
  ) {}

  title: string = environment.title;
  header = this.router.getComponent();
  menuVisible$ = this.mf.sideNavVisible;
  menuPosition$ = this.mf.sideNavPosition;
  showEditor$ = this.eb.Commands.pipe(
    map((action) => (action === SidebarActions.HIDE_MARKDOWN ? false : true))
  );
  demos$ = this.df.getDemos();

  ngOnInit() {
    this.df.initDemoData();
    this.getWorbenchStyle();
  }

  getWorbenchStyle() {
    let result = {};
    this.menuVisible$.subscribe((visible) => {
      result = visible
        ? {
            'margin-left': '10px',
          }
        : {};
    });
    return result;
  }
}
