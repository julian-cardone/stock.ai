import "./financialsNav.css";

function FinancialsNav() {
  return (
    <>
      <div className="container-fluid py-3">
        <div className="pb-1 financials-nav-link">Income Statement</div>
        <div className="pb-1 financials-nav-link">Balance Sheet</div>
        <div className="financials-nav-link">Cash Flow Statement</div>
      </div>
    </>
  );
}

export default FinancialsNav;
