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
import useSearchValidation from "../../hooks/useSearchValidation";
import { useHistoricalPrices } from "../../hooks/useHistoricalPrices";
import FinancialStatements from "./Pages/FinancialStatements";

function CompanyPage({ currentSymbol }) {
  const { validateSymbol } = useSearchValidation();
  const {
    realTimeHeaderData,
    staticHeaderData,
    fetchRealTimeHeaderData,
    fetchStaticHeaderData,
  } = useHeaderData();
  const { overviewData, fetchOverviewData } = useOverviewData();
  const { historicalPrices, fetchHistoricalPrices } = useHistoricalPrices();
  const { path } = useRouteMatch(); // Get the current path

  useEffect(() => {
    validateSymbol(currentSymbol);
    fetchStaticHeaderData(currentSymbol);
    fetchRealTimeHeaderData(currentSymbol);
    fetchOverviewData(currentSymbol);
    fetchHistoricalPrices(currentSymbol, "1D");

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
    validateSymbol,
    fetchStaticHeaderData,
    fetchRealTimeHeaderData,
    fetchOverviewData,
    fetchHistoricalPrices,
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
            <Overview
              overviewData={overviewData}
              historicalPrices={historicalPrices}
              currentSymbol={currentSymbol}
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path={`${path}/financials`}
            currentSymbol={currentSymbol}
            component={CompanyPage}
          >
            <FinancialStatements />
          </ProtectedRoute>
        </Switch>
      </div>
    </>
  );
}

export default CompanyPage;
