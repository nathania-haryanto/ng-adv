import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
})
export class DogListComponent implements OnInit {
  dogs = this.ds.getDogs();
  constructor(private ds: DogsService) {}

  ngOnInit(): void {}
}
