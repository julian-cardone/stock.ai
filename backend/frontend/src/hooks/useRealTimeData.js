import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useRealTimeData() {
  const { loading, sessionFetch } = useCustomFetch();
  const [searchData, setSearchData] = useState({});

  const fetchRealTimeData = useCallback(
    async (value) => {
      const result = await sessionFetch(
        "/stock/get_real_time_data",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      );
      setSearchData(result);
    },
    [sessionFetch]
  );

  return { data: searchData, loading, fetchRealTimeData };
}
