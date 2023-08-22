import { useCallback } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useSearchValidation() {
  const { loading, sessionFetch } = useCustomFetch();

  const validateSymbol = useCallback(
    async (value) => {
      const result = await sessionFetch(
        "/stock/validate",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      return result ? true : false;
    },
    [sessionFetch]
  );

  return { loading, validateSymbol };
}

export default useSearchValidation;
