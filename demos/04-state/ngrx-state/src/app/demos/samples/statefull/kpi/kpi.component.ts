import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StatefulDemoService } from '../stateful-demo.service';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent implements OnInit {
  constructor(private service: StatefulDemoService) {}

  ct$ = this.service.getDemos().pipe(map((items) => items.length));

  ngOnInit(): void {}
}
