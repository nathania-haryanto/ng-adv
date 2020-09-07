import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-marbles',
  templateUrl: './user-marbles.component.html',
  styleUrls: ['./user-marbles.component.scss'],
})
export class UserMarblesComponent implements OnInit, OnDestroy {
  title = 'MarbleDemo';

  users: string[] = [];

  private subscription: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.getUsers().subscribe((user) => {
      this.users.push(user);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
