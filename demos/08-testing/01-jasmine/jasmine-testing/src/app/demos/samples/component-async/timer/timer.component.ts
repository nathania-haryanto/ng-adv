import { Component } from '@angular/core';
import { delay, of } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  // can also use service to get data
  // food = this.ts.getFood();

  food = of([
    { id: 1, name: 'Pad Thai', rating: 5 },
    { id: 2, name: 'Butter Chicken', rating: 5 },
    { id: 3, name: 'Cannelloni', rating: 4 },]).pipe(delay(200));

  constructor(private ts: TimerService) { }
}
