import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
})
export class CapitalizeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.toggleTextCasing();
  }

  private toggleTextCasing() {
    this.el.nativeElement.style.textTransform === 'uppercase'
      ? (this.el.nativeElement.style.textTransform = 'lowercase')
      : (this.el.nativeElement.style.textTransform = 'uppercase');
  }
}
