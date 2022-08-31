import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from '../menu/menu.service';
import { MenuItem } from '../menu/MenuItem';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
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
    this.ms.toggleMenu();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented - just a mock');
  }

  showUpload() {
    this.router.navigate(['', { outlets: { sidebarOutlet: 'upload' } }]);
  }
}
