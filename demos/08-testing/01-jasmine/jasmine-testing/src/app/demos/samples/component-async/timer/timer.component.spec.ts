import { ComponentFixture, TestBed, fakeAsync, flush, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerComponent } from './timer.component';

describe('TimerComponent', async () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
  });

  it('should have a list of 3 food items', fakeAsync(() => {
    fixture.detectChanges();
    tick(200);
    fixture.detectChanges();
    console.log(fixture.debugElement.nativeElement.innerHTML);
    let items = fixture.debugElement.queryAll(By.css('.underlined'));
    expect(items.length).toBe(3);
  }));

  it('should have a list of 3 food items', fakeAsync(() => {
    fixture.autoDetectChanges();
    tick(200);
    console.log(fixture.debugElement.nativeElement.innerHTML);
    let items = fixture.debugElement.queryAll(By.css('.underlined'));
    expect(items.length).toBe(3);
  }));


  it('should have a list of 3 food items', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let items = fixture.debugElement.queryAll(By.css('.underlined'));
      console.log(fixture.debugElement.nativeElement.innerHTML);
      expect(items.length).toBe(3);
    });
  }));
});
