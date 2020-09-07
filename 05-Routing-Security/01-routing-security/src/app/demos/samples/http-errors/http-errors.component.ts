import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-errors',
  templateUrl: './http-errors.component.html',
  styleUrls: ['./http-errors.component.scss'],
})
export class HttpErrorsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  doCall() {
    this.http.get(' http://localhost:3000/temos').subscribe();
  }
}
