import { resource } from "../resource";

export class Topic implements resource {
  id: number;
  title: string;
  sortOrder: number;
}
