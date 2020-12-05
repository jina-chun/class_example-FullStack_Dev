import { Component } from '@angular/core';
import { date } from './data/dateMock';
import { Week } from './data/Week';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  date: Week[] = date;
  week: Week;
  fetchData = false;
  showData: number;
  showAll = false;

  constructor() { }

  showOptions(): void {
    this.fetchData = !this.fetchData;
  }

  showRaw(): void {
    this.showAll = !this.showAll;
  }

  showMore(id: number): void {
    this.showData = id;
  }

  convertJSON(file: Week): string {
    const str = JSON.stringify(file, null, 2);
    return str;
  }


}
