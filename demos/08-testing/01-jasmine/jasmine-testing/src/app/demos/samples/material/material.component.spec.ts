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
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;
  let loader: HarnessLoader;
  let sliderHarness: MatSliderHarness;
  let btnResetHarness: MatButtonHarness;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialComponent],
      imports: [MatCardModule, ReactiveFormsModule, MatSliderModule, MatButtonModule, BrowserAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(MaterialComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should btnReset the slider when btnReset is clicked', async () => {
    btnResetHarness = await loader.getHarness(
      MatButtonHarness.with({ text: 'Reset' })
    );
    sliderHarness = await loader.getHarness(MatSliderHarness);

    await btnResetHarness.click();
    const thumb = await sliderHarness.getEndThumb();
    expect(await thumb.getValue()).toBe(1);
  });
});
