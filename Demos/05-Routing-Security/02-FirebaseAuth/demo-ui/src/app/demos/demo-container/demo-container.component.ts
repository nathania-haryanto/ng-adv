import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, flatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { DemoItem } from '../demo-item';
import { DemoService } from '../demo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  title: string = environment.title;
  header$ = this.setMetadata();
  demos$ = this.demoService.getItems();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private demoService: DemoService,
    public ms: MenuService
  ) {}

  ngOnInit() {
    this.getWorbenchStyle();
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

  setMetadata() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      map((route: ActivatedRoute) =>
        route.component != null
          ? `Component: ${route.component
              .toString()
              .substring(6, route.component.toString().indexOf('{') - 1)}`
          : ''
      )
    );
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
