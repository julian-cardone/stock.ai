import PriceChange from "./PriceChange";

function SummaryHeader({ realTimeStockInfo, constantStockData }) {
  console.log(realTimeStockInfo);

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 bg-success px-5 py-4">
            <h4 className="mb-0">
              {constantStockData?.longName} ({constantStockData?.underlyingSymbol})
            </h4>
            <p className="mb-0">
              {constantStockData?.exchange} | Currency: {constantStockData?.currency}
            </p>
          </div>
        </div>
        <PriceChange realTimeStockInfo={realTimeStockInfo} />
      </div>
    </>
  );
}

export default SummaryHeader;
