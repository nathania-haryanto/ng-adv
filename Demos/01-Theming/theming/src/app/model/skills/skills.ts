import { Topic } from '../topic/topic';

export class Skill {
  id: number = 0;
  topicId: number = 0;
  topic?: Topic;
  name: string = '';
  hours: number = 0;
  completed: boolean = false;
  duedate: Date | null = null;
}
