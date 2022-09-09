import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-sign-pad',
  templateUrl: './sign-pad.component.html',
  styleUrls: ['./sign-pad.component.scss'],
})
export class SignPadComponent implements OnDestroy, AfterViewInit {
  @ViewChild('signPad', { static: true }) canvas: ElementRef;

  constructor() {}

  subMouseEvents: Subscription;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngAfterViewInit(): void {
    this.subscribeCanvas();
  }

  ngOnDestroy() {
    this.subMouseEvents.unsubscribe();
    console.log('Mouse Subscription unsubscribed');
  }

  subscribeCanvas() {
    if (this.canvas) {
      const evtMouse = fromEvent(this.canvas.nativeElement, 'mousemove').pipe(
        tap((data: any) => console.log('original data', data)),
        map((evt: MouseEvent) => {
          return { X: evt.clientX, Y: evt.clientY };
        }),
        tap((data: any) => console.log('modfied data', data))
      );

      this.subMouseEvents = evtMouse.subscribe((point) => {
        this.result = point;
        console.log('Mouse Moved @: ', point);
      });
    }
  }

  unsubscribeMouseEvt() {
    this.subMouseEvents.unsubscribe();
    console.log('unsubscribed from Mouse Event');
  }
}
