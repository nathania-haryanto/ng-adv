import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SkillsService } from '../skills.service';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
})
export class SkillsEditComponent implements OnInit {
  skill: Skill | undefined = { id: 0, name: '', hours: 1, completed: false };

  constructor(
    private service: SkillsService,
    private route: ActivatedRoute,
    private router: Router,
    private sns: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill() {
    const id = this.route.snapshot.params['id'];
    console.log('id-param:', id);
    this.service.getSkill(id).subscribe((data) => {
      this.skill = data;
      console.log('setting skill: ', data);
    });
  }

  saveSkill() {
    this.sns.displayAlert('Warning', 'Save not implemented');
  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
