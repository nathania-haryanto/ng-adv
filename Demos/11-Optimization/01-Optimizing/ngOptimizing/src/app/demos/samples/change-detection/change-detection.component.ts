import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  // add this to change change detection to on Push
  // changeDetection: ChangeDetectionStrategy.OnPush
  // Look into change-detection-detail.component

  // run on console
  // ng.profiler.timeChangeDetection({record: true})
  // before and after adding changeDetection value
})
export class ChangeDetectionComponent implements OnInit {
  constructor(private service: SkillsService) {}

  title = 'Change Detection';
  skills = this.service.getSkills();

  ngOnInit() {}

  changeTitle() {
    this.title = this.title === 'Change Detection'
    ? (this.title = 'Welcome to Change Detection')
    : (this.title = 'Change Detection');
    /*
    // change to on Push and modify title in a timeout
    console.log("Current title is: "+this.title)
    setTimeout(()=>{
      this.title === 'Change Detection'
      ? (this.title = 'Welcome to Change Detection')
      : (this.title = 'Change Detection');
      console.log('Title changed to '+this.title);
    }, 3000)
    */
    
  }
}
