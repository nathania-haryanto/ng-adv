import { Injectable } from '@angular/core';
import { AppConfig } from './app.config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cfg: AppConfig = new AppConfig();

  constructor(private httpClient: HttpClient) {
    console.log('ConfigService constructor');
  }

  loadConfig() {
    return this.httpClient
      .get<AppConfig>('./assets/config.json')
      .subscribe((config: AppConfig) => {
        this.cfg = config;
        console.log('config loaded :', this.cfg);
      });
  }
}
