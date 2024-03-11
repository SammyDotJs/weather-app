import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FetchContext from './context/fetch-context';

const FetchCities = (props) => {
  const [city, setCity] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { setLocation } = useContext(FetchContext);

  const country = 'london';
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${country}`,
        );
        setCity([...res.data]);
        setIsOpen(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCity();
  }, []);
  useEffect(() => {
    if (city.length > 0) {
      const coords = city[0].latlng;
      if (coords.length > 0) {
        const lat = coords[0];
        const lon = coords[1];
        setLocation(coords);
      }
    }
  }, [city, setLocation]);
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
