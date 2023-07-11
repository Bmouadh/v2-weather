import { Injectable } from '@angular/core';
import axios from 'axios';

const API_KEY = '35cb9273871536470f882136779b829d';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  getCurrentWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    return axios.get(url);
  }

  getForecast(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
    return axios.get(url);
  }
}
