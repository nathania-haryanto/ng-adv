import { Topic } from "../topic/topic";
import { resource } from "../resource";

export class Skill implements resource {
  id: number;
  topicId: number;
  topic?: Topic;
  title: string;
  hours: number;
  completed: boolean;
  duedate: Date;
  sortOrder: number;
}
