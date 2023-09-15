import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useHomePageData() {
  const { loading, sessionFetchWithoutCache } = useCustomFetch();
  const [realTimeHomePageData, setRealTimeHomePageData] = useState();

  const fetchRealTimeHeaderData = useCallback(async () => {
    const result = await sessionFetchWithoutCache(
      "/stock/get_major_exchanges_information"
    );
    setRealTimeHomePageData(result?.exchange_info);
  }, [sessionFetchWithoutCache]);
  return { loading, realTimeHomePageData, fetchRealTimeHeaderData };
}
