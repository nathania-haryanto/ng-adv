import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from './../dog.model';
import { DogsService } from './../dogs.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss'],
})
export class DogDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ds: DogsService) {}
  dog: Observable<Dog> = null;

  ngOnInit(): void {
    this.dog = this.ds
      .getDog(this.route.snapshot.params.id)
      .pipe(tap((d) => console.log('dog', d)));
  }
}
