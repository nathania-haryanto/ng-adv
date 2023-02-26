import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detector-child',
  templateUrl: './detector-child.component.html',
  styleUrls: ['./detector-child.component.scss'],
})
export class DetectorChildComponent implements OnInit {
  childData = 'I like Thai food';

  constructor() {}

  ngOnInit(): void {}
}
