import { useMemo } from "react";
import FinancialsNav from "./FinancialsNav";
import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
import CashFlowStatement from "./CashFlowStatement";

function FinancialStatements({ statement }) {
  const StatementComponent = useMemo(() => {
    const statementDict = {
      income_statement: IncomeStatement,
      balance_sheet: BalanceSheet,
      cash_flow_statement: CashFlowStatement,
    };
    return statementDict[statement];
  }, [statement]);

  return (
    <div className="container-fluid px-5">
      <div className="row">
        <div className="col-10 bg-primary">
          {StatementComponent ? <StatementComponent /> : null}
        </div>
        <div className="col-2 bg-success">
          <FinancialsNav />
        </div>
      </div>
    </div>
  );
}

export default FinancialStatements;
