import React, { useEffect, useState } from 'react';
import FetchContext from './fetch-context';

const FetchContextProvider = ({ children }) => {
  const [loc, setLoc] = useState(null);
  const [data, setData] = useState(null);

  const setLangLong = (val) => {
    setLoc(val);
  };
  const getWeatherData = (data) => {
    setData(data);
  };

  const fetchContext = {
    location: loc,
    setLocation: setLangLong,
    weatherData: getWeatherData,
    data: data,
  };

  return (
    <FetchContext.Provider value={fetchContext}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
