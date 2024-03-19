import React from 'react';
import Search from '../Search/Search';
import CurrentCityWeather from '../CurrentCity/CurrentCityWeather';
import Today from '../Forecast/Today';
import Tomorrow from '../Forecast/Tomorrow';

const LeftColumn = () => {
  return (
    <div className="left-column">
      <Search />
      <CurrentCityWeather />
      <div>
        <Today />
        <Tomorrow />
      </div>
    </div>
  );
};

export default LeftColumn;
