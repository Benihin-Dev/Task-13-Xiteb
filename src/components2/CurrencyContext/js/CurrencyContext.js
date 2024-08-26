import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const currencyList = ["USD", "LKR"];
  const [currencyType, setCurrencyType] = useState(0);

  return (
    <CurrencyContext.Provider
      value={{
        currencyList,
        currencyType,
        setCurrencyType,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
