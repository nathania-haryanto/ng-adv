import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.scss'],
})
export class DynamicLoadingComponent implements OnInit {
  constructor(
    private vcRef: ViewContainerRef,
    private cResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  async loadSimple() {
    this.vcRef.clear();
    const { SimpleComponent } = await import('./simple.component');
    this.vcRef.createComponent(
      this.cResolver.resolveComponentFactory(SimpleComponent)
    );
  }

  async compWithChild() {
    this.vcRef.clear();
    const { WithChildComponent } = await import('./with-child.component');
    this.vcRef.createComponent(
      this.cResolver.resolveComponentFactory(WithChildComponent)
    );
  }
}
