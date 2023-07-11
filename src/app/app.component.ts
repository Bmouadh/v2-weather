import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
// import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { ForecastTableComponent } from './forecast-table/forecast-table.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeTab = 1;
}
