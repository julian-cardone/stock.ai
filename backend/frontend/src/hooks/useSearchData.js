import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useSearchData() {
  const { loading, sessionFetch } = useCustomFetch();
  const [searchData, setSearchData] = useState({});

  const fetchSearchInfo = useCallback(
    async (value) => {
      return sessionFetch(
        "/stock/get_stock_info",
        {
          method: "POST",
          body: JSON.stringify({ inputValue: value }),
        },
        value
      ).then((result) => {
        if (result != null) {
          setSearchData(result);
          return true;
        } else {
          return false;
        }
      });
    },
    [sessionFetch]
  );

  return { data: searchData, loading, fetchSearchInfo };
}
