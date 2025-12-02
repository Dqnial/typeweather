import { useState, useRef } from "react";
import type { WeatherData } from "../types/weather";
import { getWeatherForecast } from "../api/weatherAPI";
import { getTimeByCoords } from "../api/timeAPI";
import { getWeatherAssets } from "../utils/weatherUtils";

export type WeatherState = {
  data: WeatherData | null;
  dateInfo: {
    time?: string;
    day?: string;
    month?: string;
    year?: string;
    dayOfWeek?: string;
  };
  stats: {
    tempMin: number;
    tempMax: number;
    feelsLike: number;
    probabilityOfRain: number;
    windSpeed: number;
    airHumidity: number;
    icon: string;
    bg: string;
  };
};

export const useWeather = () => {
  const [geo, setGeo] = useState("");
  const [loadingCard, setLoadingCard] = useState<boolean>(false);
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherState>({
    data: null,
    dateInfo: {},
    stats: {
      tempMin: Infinity,
      tempMax: -Infinity,
      feelsLike: 0,
      probabilityOfRain: 0,
      windSpeed: 0,
      airHumidity: 0,
      icon: "",
      bg: "",
    },
  });

  const homeRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToHome = () =>
    homeRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setLoadingCard(true);
    setLoadingDetails(true);
    try {
      const data = (await getWeatherForecast(geo)).data as WeatherData;
      const timeData = (
        await getTimeByCoords(data.city.coord.lat, data.city.coord.lon)
      ).data;
      const date = new Date(timeData.formatted);
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];

      const nowWeather = data.list[0].weather[0];
      const main = data.list[0].main;
      const wind = data.list[0].wind;

      let tempMin = Infinity;
      let tempMax = -Infinity;
      data.list.forEach((f) => {
        const d = new Date(f.dt_txt).getDate();
        if (d === date.getDate() || d - 1 === date.getDate()) {
          tempMin = Math.min(tempMin, f.main.temp_min);
          tempMax = Math.max(tempMax, f.main.temp_max);
        }
      });

      const assets = getWeatherAssets(nowWeather.main, nowWeather.id, hours);

      setWeather({
        data,
        dateInfo: {
          time: `${hours}:${minutes}`,
          day: date.getDate().toString(),
          month: months[date.getMonth()],
          year: date.getFullYear().toString(),
          dayOfWeek: days[date.getDay()],
        },
        stats: {
          tempMin,
          tempMax,
          feelsLike: main.feels_like,
          probabilityOfRain: data.list[0].pop * 100,
          windSpeed: wind.speed,
          airHumidity: main.humidity,
          icon: assets.icon,
          bg: assets.bg,
        },
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingCard(false);
      setLoadingDetails(false);
    }
  };

  return {
    geo,
    setGeo,
    weather,
    loadingCard,
    loadingDetails,
    handleSubmit,
    scrollToHome,
    homeRef,
    bottomRef,
  };
};
