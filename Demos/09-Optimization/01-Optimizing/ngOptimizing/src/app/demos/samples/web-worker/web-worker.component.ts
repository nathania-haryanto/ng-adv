import { Component, OnInit } from '@angular/core';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.scss']
})
export class WebWorkerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  runWorker() {
    const worker = new Worker('./prime-calculations.worker', {
      type: 'module'
    });
    worker.onmessage = ({ data }) => {
      console.log('From Web Worker:', data);
    };
    worker.postMessage({});
  }

  runThread() {
    const arePrimeList = primeNumberList.map(prime => {
      return isPrimeNumber(prime);
    });
    console.log('From Javascript Thread', arePrimeList);
  }
}
