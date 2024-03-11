import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchCities = () => {
  const [city, setCity] = useState([]);

  const country = 'nigeria';
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${country}`,
        );
        setCity(...res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCity();
  }, []);
  console.log(city);
  if (city.length > 0) {
    const latlng = city.latlng;
    const lat = latlng[0];
    const lon = latlng[1];
  }
  return (
    <div>
      <p>lat: {lat}</p>
      <p></p>
    </div>
  );
};

export default FetchCities;
