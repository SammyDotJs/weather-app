import React from 'react';
import FetchContext from './fetch-context';

const FetchContextProvider = ({children}) => {

  const setLangLong = (val) => {
    console.log(val)
  }

  const fetchContext = {
    location: [],
    setLocation: setLangLong
  };

  return (
    <FetchContext.Provider value={fetchContext}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
