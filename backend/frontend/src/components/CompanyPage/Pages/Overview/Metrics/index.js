import { useMemo } from "react";
import MetricsListItemKey from "./MetricsListItem";

function Metrics({ overviewData }) {
  const keys = useMemo(() => {
    try {
      return Object.keys(overviewData);
    } catch (error) {
      return [];
    }
  }, [overviewData]);

  const values = useMemo(() => {
    try {
      return Object.values(overviewData);
    } catch (error) {
      return [];
    }
  }, [overviewData]);
  console.log(overviewData);

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
