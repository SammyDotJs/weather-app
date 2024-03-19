import React, { useEffect } from 'react';
import axios from 'axios';
import FetchWeather from './components/APIs/FetchWeather';
import FetchContextProvider from './components/APIs/context/FetchContextProvider';
import LeftColumn from './components/UI/DisplayFlex/LeftColumn';
import RightColumn from './components/UI/DisplayFlex/RightColumn';

function App() {
  const lat = 10;
  const lon = -8;
  const cnt = 10;

  const errorCallback = (error) => {
    console.log(error);
  };

  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
  };
  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchApis = async () => {
      const APIkey = 'f6c1565407545e1c01bfb46d37e00141';
      try {
        const res = await axios.get(
          `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${APIkey}`,
        );
        console.log(res);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchApis();
  }, []);

  return (
    <FetchContextProvider>
      <FetchWeather />
      <main>
        <section>
          <div className="row">
            <LeftColumn />
            <RightColumn/>
          </div>
        </section>
      </main>
    </FetchContextProvider>

  );
}

export default App;
