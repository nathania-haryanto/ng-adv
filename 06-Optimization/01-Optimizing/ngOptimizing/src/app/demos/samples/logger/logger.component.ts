import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {
  constructor(private logger: NGXLogger) {}

  ngOnInit() {}

  log() {
    this.logger.debug('Entering LoggerComponent');
    this.logger.debug('Multiple', 'Argument', 'Support');
  }
}
