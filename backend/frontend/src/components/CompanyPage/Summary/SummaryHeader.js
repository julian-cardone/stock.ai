function SummaryHeader({ searchData }) {
  const stockInfo = searchData?.stock_info;
  console.log(stockInfo);

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 bg-success px-5 py-4">
            <h4>
              {stockInfo?.longName} ({stockInfo?.underlyingSymbol})
            </h4>
            <p>
              {stockInfo?.exchange} | Currency: {stockInfo?.currency}
            </p>
          </div>
        </div>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-center">
              <h1>{stockInfo?.currentPrice}</h1>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-center">
              <h4 className="mb-0">
                {(
                  stockInfo?.currentPrice - stockInfo?.previousClose
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 5,
                })}
              </h4>
            </div>
          </div>
      </div>
    </>
  );
}

export default SummaryHeader;
