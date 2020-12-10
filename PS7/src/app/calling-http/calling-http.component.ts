import { Component, OnInit } from '@angular/core';
import {WxService} from '../services/wx.service';

interface Data {
  consolidated_weather: object;
  title: object;
}


@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})
export class CallingHTTPComponent implements OnInit {

// inject service into component
  constructor(private wxService: WxService) { }
  locationID: number;
  result: object = [];
  city: object;

  fetchData = false;
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

  getWeather(locationID: number): void { // call a service to get the current data
    this.fetchData = !this.fetchData;
    this.wxService.getWeather(locationID).subscribe(
      (response: Data) => {
        this.result = response.consolidated_weather;
        this.city = response.title;
      }
    );
  }
}
