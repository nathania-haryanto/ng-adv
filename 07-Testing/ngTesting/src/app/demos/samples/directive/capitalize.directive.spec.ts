import { CapitalizeDirective } from './capitalize.directive';
import { DirectiveComponent } from './directive.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Component - Directive - CapitalizeDirective', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveComponent, CapitalizeDirective],
    });

    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should capitalize text when initially clicked', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelector('div');
    p.click();
    fixture.detectChanges();

    expect(p.style.textTransform).toBe('uppercase');
  });

  it('should lowercase when clicked twice', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelector('div');
    p.click();
    fixture.detectChanges();
    p.click();
    fixture.detectChanges();

    expect(p.style.textTransform).toBe('lowercase');
  });
});
