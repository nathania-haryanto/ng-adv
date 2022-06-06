import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Skill } from '../model/skills/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService extends EntityCollectionServiceBase<Skill> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Skill', serviceElementsFactory);
  }
}
