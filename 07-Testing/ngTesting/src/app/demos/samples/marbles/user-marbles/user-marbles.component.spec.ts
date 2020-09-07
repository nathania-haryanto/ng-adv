import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';
import { MaterialModule } from 'src/app/material.module';
import { UserMarblesComponent } from './user-marbles.component';
import { UserService } from './user.service';

describe('Marbles - Component', () => {
  let userService: any;

  beforeEach(async(() => {
    userService = jasmine.createSpy('UserService');
    userService.getUsers = cold('a-b-c', { a: 'Mike', b: 'Flo', c: 'Rolf' });

    TestBed.configureTestingModule({
      declarations: [UserMarblesComponent],
      imports: [MaterialModule],
      providers: [{ provide: UserService, useValue: userService }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserMarblesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // TODO: Fix service mock

  // it('should correctly show all user names', async () => {
  //   const fixture = TestBed.createComponent(UserMarblesComponent);
  //   fixture.detectChanges();

  //   getTestScheduler().flush();
  //   fixture.detectChanges();

  //   const divs = fixture.debugElement.queryAll(By.css('div'));
  //   expect(divs.length).toBe(3);

  //   expect(divs[0].nativeElement.innerText).toBe('Mike');
  //   expect(divs[1].nativeElement.innerText).toBe('Flo');
  //   expect(divs[2].nativeElement.innerText).toBe('Rolf');
  // });
});
