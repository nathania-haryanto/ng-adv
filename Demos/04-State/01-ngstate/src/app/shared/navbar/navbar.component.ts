import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MenuService } from '../menu/menu.service';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu/MenuItem';
import { MenuFacade } from 'src/app/store/facades/menu.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    public mf: MenuFacade,
    private ms: MenuService,
    private sns: SnackbarService
  ) {}

  title = 'Advanced Angular Development';
  editorDisplayed: boolean;
  rootRoutes: Route[];
  menuItems: Observable<MenuItem[]>;

  ngOnInit() {
    this.editorDisplayed = false;
    this.menuItems = this.ms.getTopItems();
  }

  toggleMenu() {
    this.mf.toggleMenuVisibility();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented! - just for demo');
  }

  showUpload() {
    this.router.navigate(['', { outlets: { sidebarOutlet: 'upload' } }]);
  }
}
