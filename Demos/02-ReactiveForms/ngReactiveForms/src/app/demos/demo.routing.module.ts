import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { ControlValueAccessorComponent } from './samples/control-value-accessor/control-value-accessor.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormsBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { NgxFormlyComponent } from './samples/ngx-formly/ngx-formly.component';
import { ReactiveCascadeComponent } from './samples/reactive-cascade/reactive-cascade.component';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { ReactiveNestedComponent } from './samples/reactive-nested/reactive-nested.component';
import { ReactiveTypedComponent } from './samples/reactive-typed/reactive-typed.component';
import { ReactiveValidationComponent } from './samples/reactive-validation/reactive-validation.component';
import { TypedNonnullableComponent } from './samples/typed-nonnullable/typed-nonnullable.component';
import { ReactiveExplicitTypedComponent } from './samples/reactive-explicit-typed/reactive-explicit-typed.component';
import { ReactiveExplicitTypedExternalComponent } from './samples/reactive-explicit-typed-external/reactive-explicit-typed-external.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'valuecontrol', component: ControlValueAccessorComponent },
      { path: 'reactivenested', component: ReactiveNestedComponent },
      { path: 'reactiveforms', component: ReactiveFormsComponent },
      { path: 'actionstream', component: ActionStreamsComponent },
      { path: 'formbuilder', component: FormsBuilderComponent },
      { path: 'formcontrol', component: FormControlComponent },
      { path: 'async-pipe', component: AsyncPipeComponent },
      { path: 'formarray', component: FormArrayComponent },
      { path: 'validation', component: ReactiveValidationComponent },
      { path: 'cascade', component: ReactiveCascadeComponent },
      { path: 'ngx-formly', component: NgxFormlyComponent },
      { path: 'typedforms', component: ReactiveTypedComponent },
      { path: 'typedformsexplicit', component: ReactiveExplicitTypedComponent },
      {
        path: 'type-external',
        component: ReactiveExplicitTypedExternalComponent,
      },
      { path: 'typednonnullable', component: TypedNonnullableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(demoRoutes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
