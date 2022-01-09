import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { DemoItem } from '../../demo-item.model';
import { getSelected } from '../../state/demo.selectors';
import { DemoState } from '../../state/demos.reducer';

@Component({
  selector: 'app-demo-edit',
  templateUrl: './demo-edit.component.html',
  styleUrls: ['./demo-edit.component.scss'],
})
export class DemoEditComponent implements OnInit {
  constructor(private store: Store<DemoState>) {}

  //in "real life" I would use a facade here
  item = this.store.select(getSelected);

  fcName = new FormControl('');

  ngOnInit() {
    this.item.subscribe((val: DemoItem) => this.fcName.setValue(val.title));
  }

  saveItem() {}
}
