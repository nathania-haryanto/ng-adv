import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { DemoService } from '../../demo.service';
import { LoadDemos, LoadDemosSuccess } from '../actions/demos.actions';
import { DemosEffects } from './demos.effects';

describe('NgRx - Effects - DemoEffects', () => {
  let actions: Observable<any>;
  let effects: DemosEffects;
  let demoSRV: jasmine.SpyObj<DemoService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DemosEffects,
        {
          provide: DemoService,
          useValue: {
            getDemos: jasmine.createSpy(),
          },
        },
        provideMockActions(() => actions),
      ],
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(DemosEffects);
    demoSRV = TestBed.get(DemoService);
  });

  it('should return success on LoadDemoSuccess', () => {
    const demos = [
      {
        url: 'unittesting',
        title: 'Into Unit Testing',
        component: 'UnitTestingComponent',
        id: 1,
        topicid: 1,
        visible: true,
        sortOrder: 0,
      },
    ];

    const action = new LoadDemos();
    const outcome = new LoadDemosSuccess(demos);

    actions = hot('-a', { a: action });
    const response = cold('-a|', { a: demos });
    demoSRV.getDemos.and.returnValue(response);

    const expected = cold('--b', { b: outcome });
    expect(effects.loadDemos$).toBeObservable(expected);
  });
});
