// src/types/weather.d.ts
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
}

export interface Wind {
  speed: number;
}

export interface Forecast {
  dt_txt: string;
  main: MainWeather;
  weather: Weather[];
  pop: number; // вероятность дождя
  wind: Wind;
}

export interface City {
  name: string;
  country: string;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface WeatherData {
  city: City;
  list: Forecast[];
}
