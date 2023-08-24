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
import { isMarketOpen } from "../../utils/isMarketOpen";

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

    if (isMarketOpen()) {
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
      <div className="container-fluid px-0 container-spacing">
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
      </div>
    </>
  );
}

export default CompanyPage;
