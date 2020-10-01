import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-write',
  templateUrl: 'component-write.component.html',
  styleUrls: ['./component-write.component.scss'],
})
export class ComponentWriteComponent implements OnInit {
  user = { username: 'Giro the Hunter from Spain' };

  constructor() {}

  ngOnInit(): void {}
}
