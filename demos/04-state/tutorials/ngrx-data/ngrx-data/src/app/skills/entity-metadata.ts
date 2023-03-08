/**
 * The EntityMetadata<T> interface describes aspects of an entity type that tell the NgRx Data library 
 * how to manage collections of entity data of type T
 */
import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Skill } from './skill.model';

export function sortByName(a: Skill, b: Skill): number {
  let comp = a.name.localeCompare(b.name);
  return comp;
}

const entityMetadata: EntityMetadataMap = {
  Skill: {
    selectId: (skill: Skill) => skill.id,
    sortComparer: sortByName,
  },
};

const pluralNames = {}; //NOTE: use this if the plural name of the entity is not entity + s. e.g: hero -> heroes

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};