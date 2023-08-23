import PriceChange from "./PriceChange";

function SummaryHeader({ stockInfo }) {
  console.log(stockInfo);

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 bg-success px-5 py-4">
            <h4 className="mb-0">
              {stockInfo?.longName} ({stockInfo?.underlyingSymbol})
            </h4>
            <p className="mb-0">
              {stockInfo?.exchange} | Currency: {stockInfo?.currency}
            </p>
          </div>
        </div>
        <PriceChange stockInfo={stockInfo} />
      </div>
    </>
  );
}

export default SummaryHeader;
