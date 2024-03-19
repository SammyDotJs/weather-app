import React from 'react';

const FetchContext = React.createContext({
  location: [],
  setLocation: (val) => { },
  weatherData: (data) => { },
  data:[]
});

export default FetchContext;
