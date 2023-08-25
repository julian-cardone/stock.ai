import { useCallback, useContext } from "react";
import { useWrappedRequest } from "./useWrappedRequest";
import { AppContext } from "../utils/context";

export function useCustomFetch() {
  const { loading, wrappedRequest } = useWrappedRequest();
  const { cache, setCurrentSymbol } = useContext(AppContext);

  const sessionFetchWithCache = useCallback(
    async (url, options = {}, symbol) =>
      wrappedRequest(async () => {
        const key = createCacheKey(url, symbol);

        if (cache.current.has(key)) {
          setCurrentSymbol(symbol);
          localStorage.setItem("stock-ai-current-symbol", symbol)
          return cache.current.get(key);
        }

        try {
          options.method = options.method || "GET";
          options.headers = options.headers || {};

          if (
            options.method.toUpperCase() !== "GET" &&
            !(options.body instanceof FormData)
          ) {
            options.headers["Content-Type"] = "application/json";
          }

          const sessionToken = localStorage.getItem("stock-ai-session-token");

          if (sessionToken) {
            options.headers["Authorization"] = `Bearer ${sessionToken}`;
          }

          const res = await fetch(url, options);

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error);
          }

          setCurrentSymbol(symbol);
          localStorage.setItem("stock-ai-current-symbol", symbol)
          const data = await res.json();
          cache.current.set(key, data);
          return data;
        } catch (error) {
          throw new Error(error.message);
        }
      }),
    [wrappedRequest, cache, setCurrentSymbol]
  );

  const sessionFetchWithoutCache = useCallback(
    async (url, options = {}, symbol) =>
      wrappedRequest(async () => {
        try {
          options.method = options.method || "GET";
          options.headers = options.headers || {};

          if (
            options.method.toUpperCase() !== "GET" &&
            !(options.body instanceof FormData)
          ) {
            options.headers["Content-Type"] = "application/json";
          }

          const sessionToken = localStorage.getItem("stock-ai-session-token");

          if (sessionToken) {
            options.headers["Authorization"] = `Bearer ${sessionToken}`;
          }

          const res = await fetch(url, options);

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error);
          }

          const data = await res.json();
          return data;
        } catch (error) {
          throw new Error(error.message);
        }
      }),
    [wrappedRequest]
  );

  const createCacheKey = (url, symbol) => {
    return `${url}-${symbol}`;
  };

  return { loading, sessionFetchWithCache, sessionFetchWithoutCache };
}
