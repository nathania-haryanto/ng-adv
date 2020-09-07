import { resource } from "../resource";

export class DemoItem implements resource {
  id: number;
  topicid: number;
  url: string;
  title: string;
  component: string;
  markdown?: string;
  visible: boolean;
  sortOrder: number;
}
