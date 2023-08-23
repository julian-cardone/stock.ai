import SummaryHeader from "./SummaryHeader";
import "./summary.css";

function Summary({ stockInfo }) {

  return (
    <>
      <SummaryHeader stockInfo={stockInfo} />
    </>
  );
}

export default Summary;
