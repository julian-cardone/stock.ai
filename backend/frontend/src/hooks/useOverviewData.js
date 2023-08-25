import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useOverviewData() {
  const { loading, sessionFetchWithCache } = useCustomFetch();
  const [overviewData, setOverviewData] = useState([]);

  const fetchOverviewData = useCallback(
    async (value) => {
      const result = await sessionFetchWithCache(
        "/stock/get_overview_info",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      setOverviewData(result?.stock_info);
    },
    [sessionFetchWithCache]
  );

  return { overviewData, loading, fetchOverviewData };
}
