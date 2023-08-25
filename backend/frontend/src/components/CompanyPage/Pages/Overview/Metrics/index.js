import MetricsListItem from "./MetricsListItem";
import "./metrics.css";

function Metrics({ overviewData }) {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="mt-1 col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-12">
          {overviewData.map((item, index) => {
            if (item.value === null) {
              item.value = "n/a";
            }
            return (
              <>
                <div className="ms-1 row d-flex-inline mb-1 metric-row-style">
                  <div className="col-6 d-flex px-0">
                    <MetricsListItem key={index} item={item.key} />
                  </div>
                  <div className="col-6 d-flex justify-content-end px-0">
                    <MetricsListItem key={index} item={item.value} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Metrics;
