import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // This will store our list of users

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the context
export const useUserContext = () => useContext(UserContext);