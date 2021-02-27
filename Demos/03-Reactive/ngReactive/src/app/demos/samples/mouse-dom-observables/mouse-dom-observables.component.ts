import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-mouse-dom-observables',
  templateUrl: './mouse-dom-observables.component.html',
  styleUrls: ['./mouse-dom-observables.component.scss'],
})
export class MouseDomObservablesComponent implements AfterViewInit {
  @ViewChild('signPad') signPad: ElementRef;

  sub: SubSink = new SubSink();
  result: { X: number; Y: number } = { X: -1, Y: -1 };

  private cx: CanvasRenderingContext2D;

  ngAfterViewInit() {}

  subscribeMouse() {
    this.captureEvents();
  }

  unsubscribeMouseEvt() {
    this.sub.unsubscribe();
  }

  private captureEvents() {
    const canvasEl: HTMLCanvasElement = this.signPad.nativeElement;
    const rect = canvasEl.getBoundingClientRect();

    // set the internal canvas to the corect aspect ratio of the element
    this.cx = canvasEl.getContext('2d');
    this.cx.canvas.width = rect.width;
    this.cx.canvas.height = rect.height;
    this.cx.lineWidth = 2;
    this.cx.lineCap = 'round';

    // this will capture all mousedown events from the canvas element

    const mouse$ = fromEvent(canvasEl, 'mousedown').pipe(
      switchMap((e) => {
        // after a mouse down, we'll record all mouse moves
        return fromEvent(canvasEl, 'mousemove').pipe(
          // stop once the user releases the mouse
          // this will trigger a 'mouseup' event

          takeUntil(fromEvent(canvasEl, 'mouseup')),
          // stop once the mouse leaves the canvas (mouseleave event)
          takeUntil(fromEvent(canvasEl, 'mouseleave')),

          // pairwise lets us get the previous value to draw a line from
          // the previous point to the current point
          pairwise()
        );
      })
    );

    this.sub.sink = mouse$.subscribe((res: [MouseEvent, MouseEvent]) => {
      const rectangle = this.signPad.nativeElement.getBoundingClientRect();

      // previous and current position with the offset
      const prevPos = {
        x: res[0].clientX - rectangle.left,
        y: res[0].clientY - rectangle.top,
      };

      const currentPos = {
        x: res[1].clientX - rectangle.left,
        y: res[1].clientY - rectangle.top,
      };

      // do the actual drawing
      this.drawOnCanvas(prevPos, currentPos);
    });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    if (!this.cx) {
      return;
    }

    if (
      Math.abs(prevPos.x - currentPos.x) > 0 ||
      Math.abs(prevPos.y - currentPos.y) > 0
    ) {
      this.cx.beginPath();
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
      this.cx.closePath();

      this.result.X = currentPos.x;
      this.result.Y = currentPos.y;
    }
  }
}
