import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useStockData() {
  const { loading, sessionFetchWithCache } = useCustomFetch();
  const [stockData, setStockData] = useState({});

  const fetchStockData = useCallback(
    async (value) => {
      const result = await sessionFetchWithCache(
        "/stock/get_stock_info",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      setStockData(result);
    },
    [sessionFetchWithCache]
  );

  return { data: stockData, loading, fetchStockData };
}
