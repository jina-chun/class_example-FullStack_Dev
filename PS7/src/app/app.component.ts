import { Component } from '@angular/core';
import {WxService} from './services/wx.service';

interface Data {
  value: object;
  cached: object;
}

// [cache]="cache" [fetchData]="fetchData"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServices';
  result: object = [];
  cache: object;
  fetchData = false;
  location: number;

  constructor(private wxService: WxService) { }

  getWeather(location: number): void {
    this.wxService.getWeather(location).subscribe(
      (response: Data) => {
        this.fetchData = true;
        this.result = response.value;
        this.cache = response.cached;
      }
    );
  }

}
