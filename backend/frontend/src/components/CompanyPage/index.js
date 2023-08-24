import { useEffect } from "react";
import { useRealTimeData } from "../../hooks/useRealTimeData";
import { useStockData } from "../../hooks/useStockData";
import CompanyNav from "./CompanyNav";
import {
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { ProtectedRoute } from "../Routes";
import SummaryHeader from "./SummaryHeader";
import Overview from "./Pages/Overview";

function CompanyPage({ currentSymbol }) {
  const { data: realTimeData, fetchRealTimeData } = useRealTimeData();
  const { data: stockData, fetchStockData } = useStockData();
  const realTimeStockInfo = realTimeData?.stock_info;
  const constantStockData = stockData?.stock_info;
  const { path } = useRouteMatch(); // Get the current path

  useEffect(() => {
    fetchStockData(currentSymbol);
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
  }, [currentSymbol, fetchRealTimeData, fetchStockData]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <SummaryHeader
        realTimeStockInfo={realTimeStockInfo}
      />
      <CompanyNav />
      <Switch>
        <ProtectedRoute
          exact
          path={`${path}/overview`}
          currentSymbol={currentSymbol}
          component={CompanyPage}
        >
          <Overview constantStockData={constantStockData}/>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default CompanyPage;
