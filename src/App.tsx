import { useWeather } from "./hooks/useWeather";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import ScrollHomeButton from "./components/ScrollHomeButton";
import logo from "./assets/svg/logo.svg";
import dashHomeIcon from "./assets/svg/Home.svg";

export default function App() {
  const {
    geo,
    setGeo,
    weather,
    handleSubmit,
    scrollToHome,
    homeRef,
    bottomRef,
    loadingCard,
    loadingDetails,
  } = useWeather();

  return (
    <>
      <div ref={homeRef} className="home__page">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <Search value={geo} onChange={setGeo} onSubmit={handleSubmit} />
      </div>

      <div ref={bottomRef} className="dash">
        <div className="dash-container">
          <div className="dash__inner">
            <div className="dash__left">
              {/* Блок с кнопкой домой и формой */}
              <div className="dash__home">
                <ScrollHomeButton onClick={scrollToHome} icon={dashHomeIcon} />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Поиск местоположения"
                    value={geo}
                    onChange={(e) => setGeo(e.target.value)}
                  />
                  <button type="submit" hidden />
                </form>
              </div>

              <div className="dash__left-values">
                {loadingCard && loadingDetails ? (
                  <div className="loader">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill=""
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-loader-icon lucide-loader loader-svg"
                    >
                      <path d="M12 2v4" />
                      <path d="m16.2 7.8 2.9-2.9" />
                      <path d="M18 12h4" />
                      <path d="m16.2 16.2 2.9 2.9" />
                      <path d="M12 18v4" />
                      <path d="m4.9 19.1 2.9-2.9" />
                      <path d="M2 12h4" />
                      <path d="m4.9 4.9 2.9 2.9" />
                    </svg>
                  </div>
                ) : (
                  weather.data && (
                    <WeatherCard
                      backgroundImage={weather.stats.bg}
                      weatherData={weather.data}
                      day={weather.dateInfo.day ?? null}
                      month={weather.dateInfo.month ?? null}
                      year={weather.dateInfo.year ?? null}
                      dayOfWeek={weather.dateInfo.dayOfWeek ?? null}
                      time={weather.dateInfo.time ?? null}
                      weatherSvg={weather.stats.icon}
                      currentTempMin={weather.stats.tempMin}
                      currentTempMax={weather.stats.tempMax}
                    />
                  )
                )}
              </div>
            </div>

            <div className="dash__right">
              <h3>Подробности о погоде</h3>
              {weather.data && <WeatherDetails {...weather.stats} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
