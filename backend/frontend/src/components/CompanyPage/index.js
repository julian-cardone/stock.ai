import { useEffect } from "react";
import { useHeaderData } from "../../hooks/useHeaderData";
import { useOverviewData } from "../../hooks/useOverviewData";
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
  const { overviewData, fetchOverviewData } = useOverviewData();
  const { path } = useRouteMatch(); // Get the current path

  useEffect(() => {
    fetchStaticHeaderData(currentSymbol);
    fetchRealTimeHeaderData(currentSymbol);
    fetchOverviewData(currentSymbol);

    const currentTime = new Date();
    const isMarketOpen =
      currentTime.getDay() >= 1 &&
      currentTime.getDay() <= 5 && // Monday to Friday
      currentTime.getHours() >= 9 &&
      currentTime.getHours() < 16; // 9:00am to 3:59pm

    if (isMarketOpen) {
      const searchInfoInterval = setInterval(() => {
        fetchRealTimeHeaderData(currentSymbol);
      }, 5000);

      return () => {
        clearInterval(searchInfoInterval);
      };
    }
  }, [
    currentSymbol,
    fetchOverviewData,
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
          <Overview overviewData={overviewData} />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default CompanyPage;
