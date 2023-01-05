import { Component, Input } from '@angular/core';
import { FBAuthService } from 'src/app/auth/fbauth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  authEnabled = environment.authEnabled;

  constructor(private auth: FBAuthService) {}

  ngOnInit(): void {}
}
