import { numberFormatter } from "../../../utils/numberFormatter";

function PriceChange({ realTimeHeaderData }) {
  const priceChangeDiv = () => {
    const number = numberFormatter(
      realTimeHeaderData.currentPrice - realTimeHeaderData.previousClose
    );

    const percent = numberFormatter(
      (number / (realTimeHeaderData.currentPrice - number)) * 100
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
          <div className="col-auto d-flex align-items-end">
            <h1 className="mb-0">
              {numberFormatter(realTimeHeaderData.currentPrice)}
            </h1>
          </div>
          <div className="col-auto d-flex align-items-end">
            {priceChangeDiv()}
          </div>
        </div>
        <p id="small-para">Last updated at {realTimeHeaderData.currentTime}</p>
      </div>
    </>
  );
}

export default PriceChange;
