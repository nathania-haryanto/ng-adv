import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './shared/theme/theme.service';

// needed for theming in popups
import {OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title, 
    private ts: ThemeService, 
    private overlayContainer:OverlayContainer) {}

  title: string = environment.title;
  selectedTheme = this.ts.getTheme();

  ngOnInit() {
    this.titleService.setTitle(this.title);

    // manage theme also in overlay for popups
    this.ts.getTheme().subscribe(theme=>{
      let to_remove = theme=='dark'?'light':'dark'
      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      const themeClassesToRemove = Array.from(overlayContainerClasses)
        .filter((item: string) => item.includes(to_remove));
      if (themeClassesToRemove.length) {
        overlayContainerClasses.remove(...themeClassesToRemove);
      }
      this.overlayContainer.getContainerElement().classList.add(theme);
    })
  }
}
