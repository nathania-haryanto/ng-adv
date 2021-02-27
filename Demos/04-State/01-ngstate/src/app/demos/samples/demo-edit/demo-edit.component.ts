import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemoState } from '../../store/reducers/demos.reducer';
import { getSelected } from '../../store/selectors/demo.selectors';
import { FormControl } from '@angular/forms';
import { DemoItem } from '../../demo-item.model';

@Component({
  selector: 'app-demo-edit',
  templateUrl: './demo-edit.component.html',
  styleUrls: ['./demo-edit.component.scss'],
})
export class DemoEditComponent implements OnInit {
  constructor(private store: Store<DemoState>) {}

  item = this.store.select(getSelected);

  fcName = new FormControl('');

  ngOnInit() {
    this.item.subscribe((val: DemoItem) => this.fcName.setValue(val.title));
  }

  saveItem() {}
}
