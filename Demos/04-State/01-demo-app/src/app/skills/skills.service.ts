import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsDataService extends EntityCollectionServiceBase<Skill> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Skill', serviceElementsFactory);
  }
}
