import { Component, OnInit } from '@angular/core';
import { FBAuthService } from '../../auth/fbauth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private as: FBAuthService) {}

  ngOnInit() {}

  logout() {
    this.as.logOff();
  }
}
