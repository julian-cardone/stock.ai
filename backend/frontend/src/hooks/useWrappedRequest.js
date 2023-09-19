import { useCallback, useContext, useState } from "react";
import { AppContext } from "../utils/context";

export function useWrappedRequest() {
  const [loading, setLoading] = useState(false);
  const { setError } = useContext(AppContext);

  const wrappedRequest = useCallback(
    async (promise) => {
      try {
        setLoading(true);
        const result = await promise();
        return result;
      } catch (error) {
        setError(error.message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [setError]
  );

  return { loading, wrappedRequest };
}
