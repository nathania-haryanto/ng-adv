import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MenuService } from 'src/app/shared/menu/menu.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss'],
})
export class AdminContainerComponent implements OnInit {
  constructor(public ms: MenuService) {}

  links: { title: string; url: string }[] = [
    { title: 'Topics', url: 'topics' },
    { title: 'Skills', url: 'skills' },
  ];

  sidenavMode: MatDrawerMode = 'side';

  ngOnInit() {
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
}
