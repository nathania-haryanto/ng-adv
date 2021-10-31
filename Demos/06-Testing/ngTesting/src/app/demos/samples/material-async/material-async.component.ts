import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user-model';

@Component({
  selector: 'app-material-async',
  templateUrl: './material-async.component.html',
  styleUrls: ['./material-async.component.scss'],
})
export class MaterialAsyncComponent {
  displayedColumns = ['email', 'created', 'roles'];
  dataSource: MatTableDataSource<User>;
  users: User[] = [
    { email: 'dummy@mail.com', created: '01-01-2020', roles: 'admin,standard' },
    { email: 'hello@mail.com', created: '01-01-2022', roles: 'admin' },
    {
      email: 'yes@mail.com',
      created: '01-01-2033',
      roles: 'admin,standard,restricted',
    },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource<User>(this.users);
  }
}
