import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class uxButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon: string;
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    this.click.emit(null);
  }
}
