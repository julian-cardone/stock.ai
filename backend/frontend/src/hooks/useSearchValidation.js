import { useCallback } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useSearchValidation() {
  const { loading, sessionFetchWithCache } = useCustomFetch();

  const validateSymbol = useCallback(
    async (value) => {
      const result = await sessionFetchWithCache(
        "/stock/validate",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      return result ? true : false;
    },
    [sessionFetchWithCache]
  );

  return { loading, validateSymbol };
}

export default useSearchValidation;
