import FinancialsNavLink from "./FinancialsNavLink";
import "./financialsNav.css";

function FinancialsNav() {
  return (
    <>
      <div className="container-fluid py-3">
        <FinancialsNavLink
          to="/company/financials/income_statement"
          innerText="Income Statement"
        />
        <FinancialsNavLink
          to="/company/financials/balance_sheet"
          innerText="Balance Sheet"
        />
        <FinancialsNavLink
          to="/company/financials/cash_flow_statement"
          innerText="Cash Flow Statement"
        />
      </div>
    </>
  );
}

export default FinancialsNav;
