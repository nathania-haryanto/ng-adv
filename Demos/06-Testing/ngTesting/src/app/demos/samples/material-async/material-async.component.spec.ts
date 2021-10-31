import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../material.module';
import { MaterialAsyncComponent } from './material-async.component';
import { User } from './user-model';
import { usersdata } from './users-data';

describe('MaterialAsyncComponent', () => {
  let fixture;
  let component;
  let testUsers: User[] = usersdata;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MaterialAsyncComponent],
        imports: [MaterialModule, BrowserAnimationsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table ', (done) => {
    expect(component.users).toEqual(testUsers);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);

      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('dummy@mail.com');
      console.log(row1);
      expect(row1.cells[1].innerHTML).toBe('01-01-2020');
      expect(row1.cells[2].innerHTML).toBe('admin,standard');

      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe('hello@mail.com');
      expect(row2.cells[1].innerHTML).toBe('01-01-2022');
      expect(row2.cells[2].innerHTML).toBe('admin');

      let row3 = tableRows[3];
      expect(row3.cells[0].innerHTML).toBe('yes@mail.com');
      expect(row3.cells[1].innerHTML).toBe('01-01-2033');
      expect(row3.cells[2].innerHTML).toBe('admin,standard,restricted');

      done();
    });
  });
});
