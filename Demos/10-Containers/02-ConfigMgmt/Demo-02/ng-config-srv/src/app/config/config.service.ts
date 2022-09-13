import { Injectable } from '@angular/core';
import { AppConfig } from './app.config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cfg: AppConfig | null = null;

  constructor(private httpClient: HttpClient) {}

  loadConfig() {
    return this.httpClient
      .get<AppConfig>('./assets/config.json')
      .subscribe((config: AppConfig) => {
        this.cfg = config;
      });
  }
}
