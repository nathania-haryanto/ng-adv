import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class UxButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit() {
    this.icon = '';
  }

  buttonClicked() {
    this.onClick.emit();
  }
}
