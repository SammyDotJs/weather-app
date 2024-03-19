import React from 'react';
import CurrentCityDetails from '../CurrentCity/CurrentCityDetails';
import Map from '../Map';

const RightColumn = () => {
  return (
    <div className="right-column">
      <CurrentCityDetails />
      <Map />
    </div>
  );
};

export default RightColumn;
