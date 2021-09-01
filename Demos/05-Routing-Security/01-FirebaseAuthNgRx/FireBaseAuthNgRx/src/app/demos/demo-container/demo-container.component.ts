import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { EventBusService } from 'src/app/shared/eventbus/event-bus.service';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { SidebarActions } from 'src/app/shared/sidebar/sidebar-actions';
import { environment } from 'src/environments/environment';
import { RouterFacadeService } from '../../store/facades/router-facade.service';
import { DemoItem } from '../demo-item.model';
import { LoadDemos } from '../store/actions/demos.actions';
import { DemoState } from '../store/reducers/demos.reducer';
import { getAllDemos } from '../store/selectors/demo.selectors';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  constructor(
    public ms: MenuService,
    public rf: RouterFacadeService,
    private store: Store<DemoState>,
    private eb: EventBusService
  ) {}

  title: string = environment.title;
  header = this.rf.getComponent().pipe(startWith('Please select a demo'));

  demos$: Observable<DemoItem[]> = this.store.select(getAllDemos);

  current: DemoItem = this.demos$ != null ? this.demos$[0] : null;
  workbench: any;

  showEditor = false;

  ngOnInit() {
    this.setMenu();
    this.getWorbenchStyle();
    this.setEditor();
  }

  setMenu() {
    this.store.dispatch(new LoadDemos());
  }

  setEditor() {
    this.eb.Commands.subscribe((action) => {
      this.showEditor = action === SidebarActions.HIDE_MARKDOWN ? false : true;
    });
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
}
