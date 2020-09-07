import * as fromSkills from './skills.actions';

describe('loadSkillss', () => {
  it('should return an action', () => {
    expect(fromSkills.loadSkillss().type).toBe('[Skills] Load Skillss');
  });
});
