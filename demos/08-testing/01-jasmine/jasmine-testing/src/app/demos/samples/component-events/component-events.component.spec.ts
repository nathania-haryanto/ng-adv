import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { ComponentEventsComponent } from './component-events.component';

describe('Component - Events - EventsComponent', () => {
  let component: ComponentEventsComponent;
  let fixture: ComponentFixture<ComponentEventsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentEventsComponent],
        imports: [MatCardModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEventsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the count - triggerEventHandler', () => {
    const divClick = fixture.debugElement.query(By.css('#clickable'));
    divClick.triggerEventHandler('click', {});

    expect(component.count).toBe(1);
    fixture.detectChanges();

    const divResult = fixture.debugElement.query(By.css('.result'));
    expect(divResult.nativeElement.innerText).toContain('1');
  });

  it('should increment the count - Native Api', () => {
    const divClick = fixture.debugElement.query(By.css('#clickable'));
    divClick.nativeElement.click();

    expect(component.count).toBe(1);
    fixture.detectChanges();

    const divResult = fixture.debugElement.query(By.css('.result'));
    expect(divResult.nativeElement.innerText).toContain('1');
  });
});
