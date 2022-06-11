import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-change-detection-detail',
  template: '<p>{{content}}</p>',
  styles: [''],
  // change detection stays on Push if parent is on Push
  // regardless of the setting in the child component
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionDetailComponent implements OnInit, OnDestroy{
  constructor() {}

  content = 'V1';
  interval : any = null

  ngOnInit() {
      let counter = 1
      this.interval=setInterval(()=>{
          this.content =`V${counter}`
          counter++
      },500)
  }

  ngOnDestroy(): void {
      this.interval.clear()
  }

}
