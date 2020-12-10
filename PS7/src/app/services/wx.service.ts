import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {wxConfig} from '../config/wxConfig';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WxService {

  constructor(private http: HttpClient) { }

  getWeather(locationID): Observable<any> {
    const result = this.http.get(wxConfig.baseURL + '?location=' + locationID,
      {observe: 'body', responseType: 'json'});
    return result;
  }
}
