import { Topic } from '../topics/topic.model';

export class Skill {
  id: number;
  topicId: number;
  topic?: Topic;
  title: string;
  hours: number;
  completed: boolean;
  duedate: Date;
  sortOrder: number;
}
