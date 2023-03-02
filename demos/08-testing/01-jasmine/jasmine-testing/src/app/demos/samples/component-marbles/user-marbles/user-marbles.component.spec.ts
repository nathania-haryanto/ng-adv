import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestScheduler } from 'rxjs/testing';
import { MaterialModule } from 'src/app/material.module';
import { UserMarblesComponent } from './user-marbles.component';
import { UserService } from './user.service';

describe('Marbles - Component', () => {
    let userService: any;

    // beforeEach(
    //     waitForAsync(() => {
    //         userService = jasmine.createSpy('UserService');
    //         userService.getUsers = () =>
    //             cold('a-b-c', { a: 'Mike', b: 'Flo', c: 'Rolf' });

    //         TestBed.configureTestingModule({
    //             declarations: [UserMarblesComponent],
    //             imports: [MaterialModule],
    //             providers: [{ provide: UserService, useValue: userService }],
    //         }).compileComponents();
    //     })
    // );

    // it('should create the app', () => {
    //     const fixture = TestBed.createComponent(UserMarblesComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    // });

    // TODO: Fix service mock

    // it('should correctly show all user names', async () => {
    //     const fixture = TestBed.createComponent(UserMarblesComponent);
    //     fixture.detectChanges();

    //     getTestScheduler().flush();
    //     fixture.detectChanges();

    //     const divUser = fixture.debugElement.queryAll(By.css('.user'));
    //     expect(divUser.length).toBe(3);

    //     expect(divUser[0].nativeElement.innerText).toBe('Mike');
    //     expect(divUser[1].nativeElement.innerText).toBe('Flo');
    //     expect(divUser[2].nativeElement.innerText).toBe('Rolf');
    // });
});
