import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);

  return (
    <MainContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
