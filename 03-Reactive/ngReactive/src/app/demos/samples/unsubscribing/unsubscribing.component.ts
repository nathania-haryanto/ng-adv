import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribing',
  templateUrl: './unsubscribing.component.html',
  styleUrls: ['./unsubscribing.component.scss']
})
export class UnsubscribingComponent implements OnInit, OnDestroy {
  @ViewChild('searchBox', { static: true }) searchBox: ElementRef;

  constructor() {}

  keySubs: Subscription;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngOnInit() {
    this.subscribeSearchBox();
  }

  ngOnDestroy() {
    this.keySubs.unsubscribe();
    console.log('Subscription unsubscribed');
  }

  subscribeSearchBox() {
    this.keySubs = fromEvent(this.searchBox.nativeElement, 'keyup').subscribe(
      (ke: KeyboardEvent) => {
        console.log('Event received from Keyboard:', ke);
      }
    );
  }
}
