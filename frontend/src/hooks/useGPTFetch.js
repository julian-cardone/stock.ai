import { useCallback, useContext, useState } from "react";
import { AppContext } from "../utils/context";
import { useCustomFetch } from "./useCustomFetch";

export function useGPTFetch() {
  const { cache } = useContext(AppContext);
  const { loading, sessionFetch } = useCustomFetch();
  const [info, setInfo] = useState("");

  const gptFetch = useCallback(
    async (url, inputValue) => {
      setInfo("")
      if (cache.current.has(inputValue)) {
        setInfo(cache.current.get(inputValue))
        return cache.current.get(inputValue);
      } else {
        const res = await sessionFetch("/info", {
          method: "POST",
          body: JSON.stringify({ inputValue: inputValue }),
        });
        const data = await res.json();
        if ("error" in data) {
          setInfo(data.error);
          return;
        } else {
          cache.current.set(inputValue, data.info);
          setInfo(data.info)
          return data.info;
        }
      }
    },
    [cache, sessionFetch]
  );

  return { gptFetch, info, setInfo, loading };
}
