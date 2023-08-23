import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useRealTimeData() {
  const { loading, sessionFetchWithoutCache } = useCustomFetch();
  const [realTimeData, setRealTimeData] = useState({});

  const fetchRealTimeData = useCallback(
    async (value) => {
      const result = await sessionFetchWithoutCache(
        "/stock/get_real_time_data",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      setRealTimeData(result);
    },
    [sessionFetchWithoutCache]
  );

  return { data: realTimeData, loading, fetchRealTimeData };
}
