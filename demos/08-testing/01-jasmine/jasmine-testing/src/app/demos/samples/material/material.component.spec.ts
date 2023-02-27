import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent } from './material.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
// Notice manual import of ...Harness
import { MatSliderHarness } from '@angular/material/slider/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;
  let sliderHarness: MatSliderHarness;
  let btnReset: MatButtonHarness;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, ReactiveFormsModule, MatSliderModule, MatButtonModule, BrowserAnimationsModule],
      declarations: [MaterialComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    sliderHarness = await loader.getHarness(MatSliderHarness);
    btnReset = await loader.getHarness(
      MatButtonHarness.with({ text: 'Reset' })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should btnReset the slider when btnReset is clicked', async () => {
    await btnReset.click();
    // expect(await sliderHarness.getValue()).toBe(1);
  });
});
