// src/services/timeAPI.ts
import axios from "axios";
import type { AxiosResponse } from "axios";

export const getTimeByCoords = (
  lat: number,
  lon: number
): Promise<AxiosResponse> => {
  return axios.get(
    `https://api.timezonedb.com/v2.1/get-time-zone?key=TRIST12MA004&format=json&by=position&lat=${lat}&lng=${lon}`
  );
};
