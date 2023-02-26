import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user-marbles/user.service';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.scss'],
})
export class MarblesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
