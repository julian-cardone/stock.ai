import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useHeaderData() {
  const { loading, sessionFetchWithCache, sessionFetchWithoutCache } = useCustomFetch();
  const [realTimeHeaderData, setRealTimeHeaderData] = useState({});
  const [staticHeaderData, setStaticHeaderData] = useState({});

  const fetchRealTimeHeaderData = useCallback(
    async (value) => {
      const result = await sessionFetchWithoutCache(
        "/stock/get_real_time_summary_data",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      setRealTimeHeaderData(result?.stock_info);
    },
    [sessionFetchWithoutCache]
  );

  const fetchStaticHeaderData = useCallback(
    async (value) => {
      const result = await sessionFetchWithCache(
        "/stock/get_static_summary_data",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      setStaticHeaderData(result?.stock_info);
    },
    [sessionFetchWithCache]
  );

  return {
    realTimeHeaderData,
    staticHeaderData,
    loading,
    fetchRealTimeHeaderData,
    fetchStaticHeaderData,
  };
}
