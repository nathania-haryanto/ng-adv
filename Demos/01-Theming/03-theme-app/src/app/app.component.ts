import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './shared/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private ts: ThemeService) {}

  title: string = environment.title;
  selectedTheme = this.ts.getTheme();

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
