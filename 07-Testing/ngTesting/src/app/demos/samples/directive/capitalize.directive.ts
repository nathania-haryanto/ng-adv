import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
})
export class CapitalizeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.textTransform === 'uppercase'
      ? (this.el.nativeElement.style.textTransform = 'lowercase')
      : (this.el.nativeElement.style.textTransform = 'uppercase');
  }
}
