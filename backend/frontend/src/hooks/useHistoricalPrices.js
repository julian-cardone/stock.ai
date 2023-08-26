import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useHistoricalPrices() {
  const { sessionFetchWithCache } = useCustomFetch();
  const [historicalPrices, setHistoricalPrices] = useState([]);

  const fetchHistoricalPrices = useCallback(
    async (value, timeline) => {
      const result = await sessionFetchWithCache(
        "/stock/get_historical_prices",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value, timeline: timeline }),
        },
        value,
        timeline
      );

      setHistoricalPrices(result?.stock_info);
    },
    [sessionFetchWithCache]
  );

  return { historicalPrices, fetchHistoricalPrices };
}
