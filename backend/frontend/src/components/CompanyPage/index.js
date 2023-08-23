import { useEffect } from "react";
import { useRealTimeData } from "../../hooks/useRealTimeData";
import Summary from "./Summary";

function CompanyPage({ currentSymbol }) {
  const { data: realTimeData, fetchRealTimeData } = useRealTimeData();
  const realTimeStockInfo = realTimeData?.stock_info;

  useEffect(() => {
    fetchRealTimeData(currentSymbol);

    const currentTime = new Date();
    const isMarketOpen =
      currentTime.getDay() >= 1 &&
      currentTime.getDay() <= 5 && // Monday to Friday
      currentTime.getHours() >= 9 &&
      currentTime.getHours() < 16; // 9:00am to 3:59pm

    if (isMarketOpen) {
      fetchRealTimeData(currentSymbol);

      const searchInfoInterval = setInterval(() => {
        fetchRealTimeData(currentSymbol);
      }, 5000);

      return () => {
        clearInterval(searchInfoInterval);
      };
    }
  }, [currentSymbol, fetchRealTimeData]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <Summary realTimeStockInfo={realTimeStockInfo} />
    </>
  );
}

export default CompanyPage;
