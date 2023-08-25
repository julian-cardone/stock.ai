import StockGraph from "./StockGraph";

function Graph({ historicalPrices }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-12 d-flex justify-content-around">
            <div>1D</div>
            <div>1WK</div>
            <div>1M</div>
            <div>3M</div>
            <div>6M</div>
            <div>1YR</div>
            <div>5YRS</div>
          </div>
          <StockGraph historicalPrices={historicalPrices} />
        </div>
      </div>
    </>
  );
}

export default Graph;
