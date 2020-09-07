import { ignoreElements } from 'rxjs/operators';
import { LoadDemos, LoadDemosSuccess } from './demos.actions';

describe('NgRx - Actions - DemoActions', () => {
  it('should set-up LoadDemos', () => {
    const action = new LoadDemos();
  });

  it('should set-up LoadDemosSuccess', () => {
    const result = [
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

    const action = new LoadDemosSuccess(result);
  });
});
