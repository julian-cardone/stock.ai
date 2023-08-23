import SummaryHeader from "./SummaryHeader";
import "./summary.css";

function Summary({ realTimeStockInfo, constantStockData }) {

  return (
    <>
      <SummaryHeader realTimeStockInfo={realTimeStockInfo} constantStockData={constantStockData}/>
    </>
  );
}

export default Summary;
