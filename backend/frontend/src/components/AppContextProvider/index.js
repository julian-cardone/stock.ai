import { useRef, useState } from "react";
import { AppContext } from "../../utils/context";
import React from "react";

export const AppContextProvider = ({ children }) => {
  const cache = useRef(new Map());
  const [error, setError] = useState("");
  const [currentSymbol, setCurrentSymbol] = useState(
    localStorage.getItem("stock-ai-current-symbol") || null
  );

  return (
    <AppContext.Provider
      value={{ setError, cache, currentSymbol, setCurrentSymbol }}
    >
      {error ? (
        <div className="AppError">Something broke... Error: {error}</div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};
