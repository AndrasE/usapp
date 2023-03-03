import React, {createContext, useContext} from 'react';

const userAuthContext = createContext(null);

export const userAuthProvider = ({children}) => {
  const [user, setUser] = useState({isGuest: true});
  return;
  <userAuthContext.Provider value={{user, setUser}}>
    {children}
  </userAuthContext.Provider>;
};

