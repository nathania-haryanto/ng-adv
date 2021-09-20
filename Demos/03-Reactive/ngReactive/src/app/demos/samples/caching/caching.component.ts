import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.html',
  styleUrls: ['./caching.component.scss'],
})
export class CachingComponent implements OnInit {
  constructor(private ds: DemoService) {}

  mdPath = '/assets/markdown/caching.md';

  demos$ = this.ds.getItems();

  ngOnInit() {}
}
