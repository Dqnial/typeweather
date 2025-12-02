import React from "react";
import type { WeatherData } from "../types/weather";

interface Props {
  weatherData: WeatherData;
  day: string | null;
  month: string | null;
  year: string | null;
  dayOfWeek: string | null;
  time: string | null;
  weatherSvg: string;
  backgroundImage: string | null;
  currentTempMin: number;
  currentTempMax: number;
}

const WeatherCard: React.FC<Props> = ({
  weatherData,
  day,
  month,
  year,
  dayOfWeek,
  time,
  weatherSvg,
  backgroundImage,
  currentTempMin,
  currentTempMax,
}) => (
  <div className="dash-bg" style={{ backgroundImage: backgroundImage || "" }}>
    <div className="dash__left-wrapper">
      <div className="dash__left-date">
        <h3>
          {weatherData.city.name}, {weatherData.city.country}
        </h3>
        <h4>
          {dayOfWeek}, {day} {month} {year} г.
        </h4>
      </div>
      <div className="dash__left-time">
        <h3>{time}</h3>
      </div>
    </div>
    <div className="dash__left-temp-wrapper">
      <div className="dash__left-temp-values">
        <h1>{Math.round(weatherData.list[0].main.temp)}ºc</h1>
        <div className="dash__left-temp-values-wrapper">
          <h3>
            {Math.round(currentTempMax)}ºc / {Math.round(currentTempMin)}ºc
          </h3>
          <h4>{weatherData.list[0].weather[0].description}</h4>
        </div>
      </div>
      <div className="dash__left-temp-weather">
        <img src={weatherSvg} alt="" />
      </div>
    </div>
  </div>
);

export default WeatherCard;
