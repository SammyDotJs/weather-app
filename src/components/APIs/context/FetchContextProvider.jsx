import React, { useEffect, useState } from 'react';
import FetchContext from './fetch-context';

const FetchContextProvider = ({ children }) => {
  const [loc, setLoc] = useState(null)

  const setLangLong = (val) => {
    setLoc(val)
  }

  const fetchContext = {
    location: loc,
    setLocation: setLangLong
  };

  return (
    <FetchContext.Provider value={fetchContext}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
