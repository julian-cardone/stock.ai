function PriceChange({ realTimeStockInfo }) {
  const customNumberFormatter = (number) => {
    let formattedNumber = number;
    if (number >= 1 || number <= -1) {
      formattedNumber = number?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else if (number >= 0.1 || number <= -0.1) {
      formattedNumber = number?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
      });
    } else {
      formattedNumber = number?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 5,
      });
    }

    return formattedNumber;
  };

  const priceChangeDiv = () => {
    const number = customNumberFormatter(
      realTimeStockInfo?.currentPrice - realTimeStockInfo?.previousClose
    );

    const percent = customNumberFormatter(
      (number / (realTimeStockInfo?.currentPrice - number)) * 100
    );

    if (number < 0) {
      return (
        <>
          <h4 id="negativeNumberChange" className="mb-1">
            {number} ({percent})%
          </h4>
        </>
      );
    } else {
      return (
        <>
          <h4 id="positiveNumberChange" className="mb-1">
            +{number} (+{percent}%)
          </h4>
        </>
      );
    }
  };

  return (
    <>
      <div className="row d-flex ps-5 pt-2">
        <div className="d-inline-flex gap-2">
          <div className="col-lg-auto col-md-auto col-sm-auto d-flex align-items-end">
            <h1 className="mb-0">
              {customNumberFormatter(realTimeStockInfo?.currentPrice)}
            </h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-end">
            {priceChangeDiv()}
          </div>
        </div>
        <p id="small-para">Last updated at {realTimeStockInfo?.currentTime}</p>
      </div>
    </>
  );
}

export default PriceChange;
