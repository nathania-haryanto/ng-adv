import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DemosEffects } from './demos.effects';

describe('DemosEffects', () => {
  let actions$: Observable<any>;
  let effects: DemosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DemosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<DemosEffects>(DemosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
