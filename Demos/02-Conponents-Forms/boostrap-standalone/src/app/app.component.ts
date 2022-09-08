import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  title = 'boostrap-standalone';

  skills = [
    { id: '123', name: 'rxjs from api', completed: true },
    { id: '456', name: 'ngrx from api', completed: false },
  ];
}
