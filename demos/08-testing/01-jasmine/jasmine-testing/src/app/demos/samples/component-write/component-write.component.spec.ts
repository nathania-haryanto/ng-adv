import { TestBed, waitForAsync } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentWriteComponent } from './component-write.component';

describe('ComponentWriteComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule, MatInputModule, NoopAnimationsModule],
      declarations: [ComponentWriteComponent],
    });
  });

  it(
    'should be display the written Value',
    waitForAsync(() => {
      const whippet = 'Soi the Whippet';
      const giro = 'Giro the Hunter from Spain';
      const fixture = TestBed.createComponent(ComponentWriteComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const input = fixture.debugElement.query(By.css('input'));
        const el = input.nativeElement;

        expect(el.value).toBe(giro);

        el.value = whippet;
        el.dispatchEvent(new Event('input'));

        expect(fixture.componentInstance.user.username).toBe(whippet);
      });
    })
  );
});
