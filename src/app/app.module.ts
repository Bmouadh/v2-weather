import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastTableComponent } from './forecast-table/forecast-table.component';
// import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastTableComponent,
    // ForecastChartComponent,
  ],
  imports: [BrowserModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
