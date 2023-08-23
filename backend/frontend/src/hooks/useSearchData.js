import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useSearchData() {
  const { loading, sessionFetch } = useCustomFetch();
  const [searchData, setSearchData] = useState({});

  const fetchSearchInfo = useCallback(
    async (value) => {
      const result = await sessionFetch(
        "/stock/get_stock_info",
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

  return { data: searchData, loading, fetchSearchInfo };
}
