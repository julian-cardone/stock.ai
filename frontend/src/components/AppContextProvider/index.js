import { useRef, useState } from "react";
import { AppContext } from "../../utils/context";
import React from "react";

export const AppContextProvider = ({ children }) => {
  // intialize cache
  const cache = useRef(new Map());
  //
  const [error, setError] = useState("");

  return (
    <AppContext.Provider value={{ setError, cache }}>
      {error ? (
        <div className="AppError">Something broke... Error: {error}</div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};
