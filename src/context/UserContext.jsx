import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
 
  const setCurrentUser = (user) => {
    setUser(user)
  }
  return (
    <UserContext.Provider value={{ user,setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};