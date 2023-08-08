import { useCallback } from "react";
import { useWrappedRequest } from "./useWrappedRequest";

export function useCustomFetch() {
  const { loading, wrappedRequest } = useWrappedRequest();

  const sessionFetch = useCallback(
    async (url, options = {}) =>
      wrappedRequest(async () => {
        try {
          // set options.method to 'GET' if there is no method
          options.method = options.method || "GET";
          // set options.headers to an empty object if there is no headers
          options.headers = options.headers || {};

          // if the options.method is not 'GET' and the body is not form data, then set
          // the "Content-Type" header to "application/json"
          if (
            options.method.toUpperCase() !== "GET" &&
            !(options.body instanceof FormData)
          ) {
            options.headers["Content-Type"] = "application/json";
          }

          // Get the session token from wherever you store it (e.g., sessionStorage)
          const sessionToken = localStorage.getItem("stock-ai-session-token");

          // If a session token is available, add it to the request headers as an Authorization header
          if (sessionToken) {
            options.headers["Authorization"] = `Bearer ${sessionToken}`;
          }

          // call fetch with the url and the updated options hash
          const res = await fetch(url, options);

          // if the response status code is 400 or above, then throw an error with the
          // error being the response
          return res;
        } catch (error) {
          return error;
        }

        // if the response status code is under 400, then return the response to the
        // next promise chain
      }),
    [wrappedRequest]
  );

  return { loading, sessionFetch };
}
