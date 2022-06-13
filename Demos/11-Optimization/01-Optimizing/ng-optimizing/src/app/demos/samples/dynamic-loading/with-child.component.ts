import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  templateUrl: './with-child.component.html',
  styleUrls: ['./with-child.component.scss'],
})
export class WithChildComponent implements OnInit {
  constructor(
    private vcRef: ViewContainerRef,
    private cResolver: ComponentFactoryResolver
  ) {}

  async ngOnInit(): Promise<void> {
    this.vcRef.clear();
    const { TheChildComponent } = await import('./the-child.component');
    this.vcRef.createComponent(
      this.cResolver.resolveComponentFactory(TheChildComponent)
    );
  }
}
