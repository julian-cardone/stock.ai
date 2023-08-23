import PriceChange from "./PriceChange";

function SummaryHeader({ realTimeStockInfo, constantStockData }) {
  console.log(realTimeStockInfo);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 px-5 pt-4">
            <h4 className="mb-0">
              {constantStockData?.longName} (
              {constantStockData?.underlyingSymbol})
            </h4>
            <p className="mb-0" id="small-para">
              {constantStockData?.exchange} | Currency:{" "}
              {constantStockData?.currency}
            </p>
          </div>
        </div>
        <PriceChange realTimeStockInfo={realTimeStockInfo} />
        <div className="row bg-success mx-4">
          <p className="my-1"></p>
        </div>
      </div>
    </>
  );
}

export default SummaryHeader;
