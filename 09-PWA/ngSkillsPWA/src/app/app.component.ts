import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessagingService } from './shared/messaging.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CloudMessage } from './shared/message.schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular PWA Skills';
  msgGreeting = 'Angular Developer';
  message: any;

  constructor(
    private swUpdate: SwUpdate,
    private messagingService: MessagingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.attachUpdateHandler();
    // this.setupMessaging();
  }

  private setupMessaging() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.messagingService.currentMessage.subscribe((msg: CloudMessage) => {
      if (msg != null) {
        this.snackBar.open(msg.notification.body, msg.notification.title, {
          duration: 3000
        });
      }
    });
  }

  private attachUpdateHandler() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
