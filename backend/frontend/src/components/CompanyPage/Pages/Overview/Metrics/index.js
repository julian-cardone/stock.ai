import MetricsListItem from "./MetricsListItem";

function Metrics({ overviewData }) {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="col-6">
          {overviewData.map((item, index) => {
            if (item.value === null) {
              item.value = "n/a";
            }
            return (
              <>
                <div className="row d-flex-inline">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <MetricsListItem key={index} item={item.key} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
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
