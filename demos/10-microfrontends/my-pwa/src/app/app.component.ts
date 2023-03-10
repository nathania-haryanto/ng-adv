import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pwa';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.attachUpdateHandler();
  }
  
  private attachUpdateHandler() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
