import { useMemo } from "react";
import MetricsListItemKey from "./MetricsListItemKey";

function Metrics({ constantStockData }) {
  const keys = useMemo(() => {
    try {
      return Object.keys(constantStockData);
    } catch (error) {
      return [];
    }
  }, [constantStockData]);

  const values = useMemo(() => {
    try {
      return Object.values(constantStockData);
    } catch (error) {
      return [];
    }
  }, [constantStockData]);
  console.log(values);

  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-3">
            {keys.map((item, index) => {
              return <MetricsListItemKey key={index} item={item} />;
            })}
          </div>
          <div className="col-3">
            {values.map((item, index) => {
              return <MetricsListItemKey key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Metrics;
