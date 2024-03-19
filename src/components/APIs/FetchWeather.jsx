import React, { useContext } from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import FetchCities from './FetchCities';
import FetchContext from './context/fetch-context';

const FetchWeather = () => {
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState(null);

  const { location , weatherData } = useContext(FetchContext);

  useEffect(() => {
    if (location) {
      setCoords(location[0]);
    }
  }, [location]);

  useEffect(() => {
    if (coords) {
      const fetchApi = async () => {
        const { latitude, longitude } = coords;
        const APIkey = 'f6c1565407545e1c01bfb46d37e00141';
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`,
          );
          setData(res.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchApi();
    }
  }, [coords]);
  // console.log(data)
  weatherData(data)
  return (
    <div>
      <FetchCities />
    </div>
  );
};

export default FetchWeather;
