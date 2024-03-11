import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FetchContext from './context/fetch-context';

const FetchCities = (props) => {
  const [city, setCity] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const {setLocation} = useContext(FetchContext)

  const country = 'nigeria';
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
  console.log(city);
  let latLon = []
   
  const latlng = city[0].latlng
  if (city.length > 0) {
    const lat = latlng[0];
    const lon = latlng[1];
    latLon.push(lat)
    console.log(latLon)
  }
  return (
    isOpen && (
      <div>
        <p>lat: {latlng[0]}</p>
        <p>lon: {latlng[1]}</p>
      </div>
    )
  );
};

export default FetchCities;
