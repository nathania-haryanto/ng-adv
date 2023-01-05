import { environment } from "src/environments/environment";

export class ChangeDetectionLoggger {
  static log(comp) {
    if (environment.logChangeDetection) {
      console.log("changed detection in component: ", comp);
    }
  }
}
