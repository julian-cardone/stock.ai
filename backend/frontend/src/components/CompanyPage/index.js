import { useEffect, useState } from "react";
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
import LoadingPage from "./LoadingPage";

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
  const { path } = useRouteMatch();
  const [companyPageloading, companyPageSetLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([
        validateSymbol(currentSymbol),
        fetchStaticHeaderData(currentSymbol),
        fetchRealTimeHeaderData(currentSymbol),
        fetchOverviewData(currentSymbol),
        fetchHistoricalPrices(currentSymbol, "1D"),
      ]);
      companyPageSetLoading(false);

      if (isMarketOpen()) {
        const searchInfoInterval = setInterval(() => {
          fetchRealTimeHeaderData(currentSymbol);
        }, 5000);

        return () => {
          clearInterval(searchInfoInterval);
        };
      }
    };

    fetchAll();
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
      {companyPageloading && (
        <LoadingPage companyPageloading={companyPageloading} />
      )}
      {!companyPageloading && (
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
              path={`${path}/financials/income_statement`}
              currentSymbol={currentSymbol}
              component={CompanyPage}
            >
              <FinancialStatements statement="income_statement" />
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path={`${path}/financials/balance_sheet`}
              currentSymbol={currentSymbol}
              component={CompanyPage}
            >
              <FinancialStatements statement="balance_sheet" />
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path={`${path}/financials/cash_flow_statement`}
              currentSymbol={currentSymbol}
              component={CompanyPage}
            >
              <FinancialStatements statement="cash_flow_statement" />
            </ProtectedRoute>
          </Switch>
        </div>
      )}
    </>
  );
}

export default CompanyPage;
