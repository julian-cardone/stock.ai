import Graph from "./Graph";
import Metrics from "./Metrics";

function Overview({ overviewData, historicalPrices, currentSymbol }) {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="mt-1 col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-12">
            <Metrics overviewData={overviewData} />
          </div>
          <div className="mt-1 px-1 col-xxl-9 col-xl-8 col-lg-8 col-md-7 col-12">
            <Graph historicalPrices={historicalPrices} currentSymbol={currentSymbol}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
