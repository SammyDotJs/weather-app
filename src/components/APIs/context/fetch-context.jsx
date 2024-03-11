import React from 'react';

const FetchContext = React.createContext({
  location: [],
  setLocation:(val)=>{},
});

export default FetchContext;
