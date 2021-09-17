import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msal',
  templateUrl: './msal.component.html',
  styleUrls: ['./msal.component.scss'],
})
export class MsalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  evt = {
    Subject: 'A Graph Event',
    Body: {
      ContentType: 'HTML',
      Content: 'The Super Fancy Angular MS Graph Event',
    },
    Start: {
      DateTime: '2020-04-02T00:00:00',
      TimeZone: 'UTC',
    },
    End: {
      DateTime: '2020-04-02T23:00:00',
      TimeZone: 'UTC',
    },
  };

  logIn() {}

  logOff() {}

  getRecentFiles() {
    // this.service.query(
    //   environment.o365Config.endpoints.graphApiUri,
    //   '/v1.0/me/drive/recent',
    //   (response) => {
    //     this.recentFiles = response.value.slice(0, 9);
    //     console.log(
    //       'Successfully fetched Recent Top Ten Documents:',
    //       this.recentFiles
    //     );
    //   }
    // );
  }

  createEvent() {
    // this.service.createEvent(this.evt, '/v1.0/me/calendar/events');
  }
}
