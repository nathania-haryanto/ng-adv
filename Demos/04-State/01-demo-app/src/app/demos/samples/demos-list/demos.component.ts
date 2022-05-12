import { Component, OnInit } from '@angular/core';
import { DemoFacade } from '../../state/demo.facade';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
})
export class DemosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addDemo() {}

  editDemo() {}
}
