import { useHistoricalPrices } from "../../../../../hooks/useHistoricalPrices";
import StockGraph from "./StockGraph";
import "./graph.css";

function Graph({ historicalPrices, currentSymbol }) {
  const { fetchHistoricalPrices } = useHistoricalPrices();
  const handleClick = (e) => {
    fetchHistoricalPrices(currentSymbol, e.target.innerHTML);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-12 d-flex justify-content-around">
            <div onClick={handleClick} className="graph-interval-link">
              1D
            </div>
            <div onClick={handleClick} className="graph-interval-link">
              1WK
            </div>
            <div onClick={handleClick} className="graph-interval-link">
              1M
            </div>
            <div onClick={handleClick} className="graph-interval-link">
              3M
            </div>
            <div onClick={handleClick} className="graph-interval-link">
              6M
            </div>
            <div onClick={handleClick} className="graph-interval-link">
              1YR
            </div>
            <div onClick={handleClick} className="graph-interval-link">
              5YRS
            </div>
          </div>
          <StockGraph historicalPrices={historicalPrices} />
        </div>
      </div>
    </>
  );
}

export default Graph;
