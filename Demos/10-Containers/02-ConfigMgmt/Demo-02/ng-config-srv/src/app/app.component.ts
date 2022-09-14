import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from './config/app.config.model';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-config-srv';
  cfg: Observable<AppConfig | null> = this.cs.cfg;
  apiUrl = this.cs.apiUrl;

  constructor(public cs: ConfigService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
  }
}
