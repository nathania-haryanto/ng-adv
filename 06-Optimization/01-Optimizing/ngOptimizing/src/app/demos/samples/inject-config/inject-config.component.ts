import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../../shared/config/config.service';

@Component({
  selector: 'app-inject-config',
  templateUrl: './inject-config.component.html',
  styleUrls: ['./inject-config.component.scss'],
})
export class InjectConfigComponent implements OnInit {
  constructor(cs: ConfigService) {
    this.title = cs.cfg.title;
  }

  title = '';

  ngOnInit(): void {}
}
