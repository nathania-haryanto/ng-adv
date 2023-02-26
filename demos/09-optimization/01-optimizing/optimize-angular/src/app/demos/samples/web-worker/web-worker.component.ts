import { Component, OnInit } from '@angular/core';
// import primeNumberList from 'prime-number/list';
// import isPrimeNumber from 'prime-number';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.scss']
})
export class WebWorkerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  runWorker() {
    const worker = new Worker(new URL('./prime-calculations.worker', import.meta.url), {
      type: 'module'
    });
    worker.onmessage = ({ data }) => {
      console.log('From Web Worker:', data);
    };
    worker.postMessage({});
  }

  runThread() {
    // const arePrimeList = primeNumberList.map((prime :number) => {
    //   return isPrimeNumber(prime);
    // });
    // console.log('From Javascript Thread', arePrimeList);
  }
}
