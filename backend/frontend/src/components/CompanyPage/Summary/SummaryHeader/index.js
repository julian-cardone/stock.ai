import PriceChange from "./PriceChange";

function SummaryHeader({ realTimeStockInfo }) {
  console.log(realTimeStockInfo);

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 bg-success px-5 py-4">
            <h4 className="mb-0">
              {realTimeStockInfo?.longName} ({realTimeStockInfo?.underlyingSymbol})
            </h4>
            <p className="mb-0">
              {realTimeStockInfo?.exchange} | Currency: {realTimeStockInfo?.currency}
            </p>
          </div>
        </div>
        <PriceChange realTimeStockInfo={realTimeStockInfo} />
      </div>
    </>
  );
}

export default SummaryHeader;
