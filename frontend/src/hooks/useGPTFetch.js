import { useCallback, useContext } from "react";
import { AppContext } from "../utils/context";
import { useCustomFetch } from "./useCustomFetch";

export function useGPTFetch() {
  const { cache } = useContext(AppContext);
  const { loading, sessionFetch } = useCustomFetch();

  const gptFetch = useCallback(
    async (url, inputValue) => {
      if (cache.current.has(url)) {
        return cache.current.get(url);
      } else {
        const res = await sessionFetch("/info", {
          method: "POST",
          body: JSON.stringify({ inputValue: inputValue }),
        });
        const data = await res.json();
        cache.current.set(url, data)
        return data;
      }
    },
    [cache, sessionFetch]
  );

  return { gptFetch, loading };
}
