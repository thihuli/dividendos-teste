import React, { createContext, useState} from 'react';

import AppContext from './AppContext';

const ContextProvider = ({children}) => {
  const [token , setToken] = useState(null);
  
  return (
    <AppContext.Provider 
      value={{token, setToken}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;