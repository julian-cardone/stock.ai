import SummaryHeader from "./SummaryHeader";
import "./summary.css";

function Summary({ realTimeStockInfo }) {

  return (
    <>
      <SummaryHeader realTimeStockInfo={realTimeStockInfo} />
    </>
  );
}

export default Summary;
