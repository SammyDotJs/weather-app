import React, { useContext } from 'react';
import FetchContext from '../../APIs/context/fetch-context';
import { Polygon } from '../../../shapes/IrregularShapes';

const CurrentCityWeather = () => {
  const { data } = useContext(FetchContext);
  console.log(data);

  return (
    <div>
      {/* <Polygon>
        <p>South Korea</p>
      </Polygon> */}
    </div>
  );
};

export default CurrentCityWeather;
