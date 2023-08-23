import { useEffect } from "react";
import { useSearchData } from "../../hooks/useSearchData";
import Summary from "./Summary";

function CompanyPage({ currentSymbol }) {
  const { data: searchData, fetchSearchInfo } = useSearchData();
  const stockInfo = searchData?.stock_info;

  useEffect(() => {
    const searchInfoInterval = setTimeout(() => {
      fetchSearchInfo(currentSymbol);
    }, 2000);

    return () => {
      clearInterval(searchInfoInterval);
    };
  }, [currentSymbol, fetchSearchInfo]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <Summary stockInfo={stockInfo} />
    </>
  );
}

export default CompanyPage;
