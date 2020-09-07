import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss']
})
export class BundlesComponent implements OnInit {
  constructor() {
    this.strDt = moment(new Date())
      .add(1, 'days')
      .format('MMM Do YY');
  }

  strDt: string;

  ngOnInit() {}
}
