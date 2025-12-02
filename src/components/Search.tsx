import React from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange, onSubmit }) => (
  <div className="search">
    <div className="container">
      <div className="search__inner">
        <div className="search__intro">
          <h1>
            Добро пожаловать в <span>TypeWeather</span>
          </h1>
          <h3>Выберите место, чтобы увидеть прогноз погоды</h3>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Поиск местоположения"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit" hidden />
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
