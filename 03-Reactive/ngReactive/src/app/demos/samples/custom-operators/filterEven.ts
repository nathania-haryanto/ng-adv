import { Observable } from 'rxjs';

export function filterEven(source: Observable<any>): Observable<any> {
  return new Observable(observer => {
    source.subscribe(
      (val: number) => {
        if (val % 2 === 0) {
          observer.next(val);
        }
      },
      err => observer.error(err),
      () => observer.complete()
    );
  });
}
