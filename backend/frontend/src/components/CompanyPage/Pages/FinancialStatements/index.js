import FinancialsNav from "./FinancialsNav";

function FinancialStatements() {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-10 bg-primary">finacial statements index</div>
          <div className="col-2 bg-success">
            <FinancialsNav />
          </div>
        </div>
      </div>
    </>
  );
}

export default FinancialStatements;
