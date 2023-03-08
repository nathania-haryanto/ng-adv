import { Component, inject, OnInit } from '@angular/core';
import { DemoService } from '../../demo-base/demo.service';

@Component({
  selector: 'app-di-inject',
  templateUrl: './di-inject.component.html',
  styleUrls: ['./di-inject.component.scss']
})
export class DiInjectComponent implements OnInit {
  service = inject(DemoService);

  ngOnInit() {
    this.service.getItems().subscribe(demos => {
      console.log(demos);
    });
  }
}
