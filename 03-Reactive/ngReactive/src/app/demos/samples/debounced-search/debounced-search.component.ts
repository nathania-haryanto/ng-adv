import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild('searchBox') searchBox: ElementRef;
  searchterm = '';

  ngOnInit() {}

  ngAfterViewInit() {
    this.attachDebouncedSearch();
  }

  private attachDebouncedSearch() {
    fromEvent(this.searchBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(750),
        map((kEvt: KeyboardEvent) => {
          return (kEvt.srcElement as HTMLInputElement).value;
        })
      )
      .subscribe((val) => {
        console.log('Currently your searching debounced for:', val);
      });
  }
}
