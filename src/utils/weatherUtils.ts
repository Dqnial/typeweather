// src/utils/weatherUtils.ts
import fewCloudsNight from "../assets/svg/Weather=Few clouds, Moment=Night.svg";
import fewCloudsDay from "../assets/svg/Weather=Few clouds, Moment=Day.svg";
import clearDay from "../assets/svg/Weather=Clear, Moment=Day.svg";
import clearNight from "../assets/svg/Weather=Clear, Moment=Night.svg";
import cloudyDay from "../assets/svg/Weather=Cloudy, Moment=Day.svg";
import cloudyNight from "../assets/svg/Weather=Cloudy, Moment=Night.svg";
import rainDay from "../assets/svg/Weather=Rain, Moment=Day.svg";
import rainNight from "../assets/svg/Weather=Rain, Moment=Night.svg";
import snowDay from "../assets/svg/Weather=Snow, Moment=Day.svg";
import snowNight from "../assets/svg/Weather=Snow, Moment=Night.svg";

import fewCloudsDayBg from "../assets/images/Weather=Few Clouds, Moment=Day.png";
import fewCloudsNightBg from "../assets/images/Weather=Few Clouds, Moment=Night.png";
import clearDayBg from "../assets/images/Weather=Clear, Moment=Day.png";
import clearNightBg from "../assets/images/Weather=Clear, Moment=Night.png";
import cloudyDayBg from "../assets/images/Weather=Cloudy, Moment=Day.png";
import cloudyNightBg from "../assets/images/Weather=Cloudy, Moment=Night.png";
import rainDayBg from "../assets/images/Weather=Rain, Moment=Day.png";
import rainNightBg from "../assets/images/Weather=Rain, Moment=Night.png";
import snowDayBg from "../assets/images/Weather=Snow, Moment=Day.png";
import snowNightBg from "../assets/images/Weather=Snow, Moment=Night.png";

interface WeatherAssets {
  icon: string;
  bg: string;
}

export const getWeatherAssets = (
  main: string,
  id: number,
  hours: number
): WeatherAssets => {
  const isDay = hours >= 5 && hours <= 19;

  if (main === "Clouds") {
    if ([801, 802, 803].includes(id)) {
      return isDay
        ? { icon: fewCloudsDay, bg: `url(${fewCloudsDayBg})` }
        : { icon: fewCloudsNight, bg: `url(${fewCloudsNightBg})` };
    } else if (id === 804) {
      return isDay
        ? { icon: cloudyDay, bg: `url(${cloudyDayBg})` }
        : { icon: cloudyNight, bg: `url(${cloudyNightBg})` };
    }
  } else if (main === "Clear") {
    return isDay
      ? { icon: clearDay, bg: `url(${clearDayBg})` }
      : { icon: clearNight, bg: `url(${clearNightBg})` };
  } else if (main === "Rain") {
    return isDay
      ? { icon: rainDay, bg: `url(${rainDayBg})` }
      : { icon: rainNight, bg: `url(${rainNightBg})` };
  } else if (main === "Snow") {
    return isDay
      ? { icon: snowDay, bg: `url(${snowDayBg})` }
      : { icon: snowNight, bg: `url(${snowNightBg})` };
  }

  return { icon: clearDay, bg: `url(${clearDayBg})` }; // default
};
