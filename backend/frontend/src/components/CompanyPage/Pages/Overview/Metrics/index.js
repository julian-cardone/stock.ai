import MetricsListItem from "./MetricsListItem";

function Metrics({ overviewData }) {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-12">
          {overviewData.map((item, index) => {
            if (item.value === null) {
              item.value = "n/a";
            }
            return (
              <>
                <div className="row d-flex-inline">
                  <div className="col-6 d-flex">
                    <MetricsListItem key={index} item={item.key} />
                  </div>
                  <div className="col-6 d-flex justify-content-end">
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
