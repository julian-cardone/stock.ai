import { useEffect } from "react";
import { useHeaderData } from "../../hooks/useHeaderData";
import { useStockData } from "../../hooks/useStockData";
import CompanyNav from "./CompanyNav";
import {
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { ProtectedRoute } from "../Routes";
import Overview from "./Pages/Overview";
import Header from "./Header";

function CompanyPage({ currentSymbol }) {
  const {
    realTimeHeaderData,
    staticHeaderData,
    fetchRealTimeHeaderData,
    fetchStaticHeaderData,
  } = useHeaderData();
  const { data: stockData, fetchStockData } = useStockData();
  const { path } = useRouteMatch(); // Get the current path

  useEffect(() => {
    fetchStockData(currentSymbol);
    fetchRealTimeHeaderData(currentSymbol);
    fetchStaticHeaderData(currentSymbol);

    const currentTime = new Date();
    const isMarketOpen =
      currentTime.getDay() >= 1 &&
      currentTime.getDay() <= 5 && // Monday to Friday
      currentTime.getHours() >= 9 &&
      currentTime.getHours() < 16; // 9:00am to 3:59pm

    if (isMarketOpen) {
      fetchRealTimeHeaderData(currentSymbol);

      const searchInfoInterval = setInterval(() => {
        fetchRealTimeHeaderData(currentSymbol);
      }, 5000);

      return () => {
        clearInterval(searchInfoInterval);
      };
    }
  }, [
    currentSymbol,
    fetchStockData,
    fetchRealTimeHeaderData,
    fetchStaticHeaderData,
  ]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <Header
        realTimeHeaderData={realTimeHeaderData}
        staticHeaderData={staticHeaderData}
      />
      <CompanyNav />
      <Switch>
        <ProtectedRoute
          exact
          path={`${path}/overview`}
          currentSymbol={currentSymbol}
          component={CompanyPage}
        >
          <Overview constantStockData={constantStockData} />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default CompanyPage;
