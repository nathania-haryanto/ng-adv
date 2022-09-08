import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-vs-container',
  templateUrl: './template-vs-container.component.html',
  styleUrls: ['./template-vs-container.component.scss'],
})
export class TemplateVsContainerComponent implements OnInit {
  currentTime = interval(100).pipe(map(() => new Date().toTimeString()));

  constructor() {}

  ngOnInit(): void {}
}
