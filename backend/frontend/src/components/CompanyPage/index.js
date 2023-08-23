import { useEffect } from "react";
import { useRealTimeData } from "../../hooks/useRealTimeData";
import Summary from "./Summary";

function CompanyPage({ currentSymbol }) {
  const { data: searchData, fetchRealTimeData } = useRealTimeData();
  const stockInfo = searchData?.stock_info;

  useEffect(() => {
    const searchInfoInterval = setTimeout(() => {
      fetchRealTimeData(currentSymbol);
    }, 2000);

    return () => {
      clearInterval(searchInfoInterval);
    };
  }, [currentSymbol, fetchRealTimeData]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <Summary stockInfo={stockInfo} />
    </>
  );
}

export default CompanyPage;
