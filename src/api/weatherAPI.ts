// src/services/weatherAPI.ts
import axios from "axios";
import type { AxiosResponse } from "axios";

export const getWeatherForecast = (city: string): Promise<AxiosResponse> => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&cnt=5&units=metric&appid=42b2c02597e27c0eb53ffabe1cfd5463`
  );
};
