import { Observable } from "rxjs";
import { DemoItem } from "src/app/model/demo/DemoItem";
import { Topic } from "src/app/model/topic/topic";
import { combineLatest } from "rxjs/operators";
import { tap, map, pluck } from "rxjs/operators";

// export function resolveModule() : Observable<DemoItem>(
//     demo: Observable<DemoItem>,
//     topics: Observable<Topic[]>
// ){
//     let result = combineLatest(demo,topics).pipe(
//         map()
//     )
// }
