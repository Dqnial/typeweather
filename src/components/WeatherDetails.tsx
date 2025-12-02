import React from "react";
import thermometerSimpleLight from "../assets/svg/Type=thermometer-simple-light.svg";
import dropLight from "../assets/svg/Type=drop-light.svg";
import cloudRainLight from "../assets/svg/Type=cloud-rain-light.svg";
import windLight from "../assets/svg/Type=wind-light.svg";

interface Props {
  feelsLike: number;
  probabilityOfRain: number;
  windSpeed: number;
  airHumidity: number;
}

const WeatherDetails: React.FC<Props> = ({
  feelsLike,
  probabilityOfRain,
  windSpeed,
  airHumidity,
}) => (
  <ul className="details__list">
    <li className="details__item">
      <div className="details__item-text">
        <img src={thermometerSimpleLight} alt="" />
        <p>Тепловое ощущение</p>
      </div>
      <div className="details__item-value">
        <h4>{Math.round(feelsLike)}ºc</h4>
      </div>
    </li>
    <li className="details__item">
      <div className="details__item-text">
        <img src={cloudRainLight} alt="" />
        <p>Вероятность дождя</p>
      </div>
      <div className="details__item-value">
        <h4>{Math.round(probabilityOfRain)}%</h4>
      </div>
    </li>
    <li className="details__item">
      <div className="details__item-text">
        <img src={windLight} alt="" />
        <p>Скорость ветра</p>
      </div>
      <div className="details__item-value">
        <h4>{Math.round(windSpeed)} м/c</h4>
      </div>
    </li>
    <li className="details__item">
      <div className="details__item-text">
        <img src={dropLight} alt="" />
        <p>Влажность воздуха</p>
      </div>
      <div className="details__item-value">
        <h4>{airHumidity}%</h4>
      </div>
    </li>
  </ul>
);

export default WeatherDetails;
