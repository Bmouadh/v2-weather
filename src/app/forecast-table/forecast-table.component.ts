import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css'],
})
export class ForecastTableComponent implements OnInit {
  forecast: any[] | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getForecast('CITY_NAME')
      .then((response: { data: { list: any[] | undefined } }) => {
        this.forecast = response.data.list;
      })
      .catch((error) => {
        console.error('Error fetching forecast:', error);
      });
  }
}
