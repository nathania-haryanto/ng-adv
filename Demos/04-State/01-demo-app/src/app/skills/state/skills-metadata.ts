import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Skill: {},
};

const pluralNames = { Skill: 'Skills' };

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
