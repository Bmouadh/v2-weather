import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('CITY_NAME')
      .then((response: { data: any }) => {
        this.weather = response.data;
      })
      .catch((error) => {
        console.error('Error fetching current weather:', error);
      });
  }
}
