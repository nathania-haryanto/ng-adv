export interface CloudMessage {
  data: Data;
  from: string;
  priority: string;
  notification: Notification;
  collapse_key: string;
}

export interface Notification {
  title: string;
  body: string;
  tag: string;
}

export interface Data {
  "gcm.n.e": string;
  "google.c.a.ts": string;
  "google.c.a.udt": string;
  "google.c.a.c_id": string;
  "google.c.a.e": string;
}
