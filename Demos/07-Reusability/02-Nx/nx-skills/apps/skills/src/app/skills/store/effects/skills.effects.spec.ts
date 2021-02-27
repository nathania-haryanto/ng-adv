import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SkillsEffects } from './skills.effects';

describe('SkillsEffects', () => {
  let actions$: Observable<any>;
  let effects: SkillsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SkillsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
