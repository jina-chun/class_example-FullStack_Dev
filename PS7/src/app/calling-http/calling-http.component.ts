import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})

export class CallingHTTPComponent implements OnInit {
  @Input() result: object = [];
  @Input() cache: object;
  @Input()fetchData: boolean;

  constructor() { }
  showData: number;

  ngOnInit(): void {
  }

  showMore(id: number): void {
    this.showData = id;
  }

  convertJSON(json: object): string {
    const str = JSON.stringify(json, null, 2);
    return str;
  }

}
