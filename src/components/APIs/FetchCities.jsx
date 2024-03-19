import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FetchContext from './context/fetch-context';

const FetchCities = (props) => {
  const [cityInfo, setCityInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { setLocation } = useContext(FetchContext);

  const city = 'lagos';
    const options = {
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/city?name=${city}`,
      headers: {
        'X-API-Key': 'ghxTI3WZY+WpbJ6O+7R1AA==9rrW7OzsBhj41The',
      },
      contentType: 'application/json',
    };

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setCityInfo([...response.data]);
        setIsOpen(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCity();
  }, []);
  // console.log(cityInfo);

  useEffect(() => {
    if (cityInfo.length > 0) {
      // const coords = [cityInfo[0].latitude, cityInfo[0].longitude];

      const coords = [{ latitude: cityInfo[0].latitude, longitude: cityInfo[0].longitude }];

      console.log(coords);
      if (coords.length > 0) {
      const lat = coords[0];
      const lon = coords[1];
      setLocation(coords);
      }
    }
  }, [cityInfo]);



  return (
    isOpen && (
      <div>
        {/* <p>lat: {latlng[0]}</p>
        <p>lon: {latlng[1]}</p> */}
      </div>
    )
  );
};

export default FetchCities;
