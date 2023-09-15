import ExchangeDisplayItem from "./ExchangeDisplayItem";

function ExchangesDisplay({ realTimeHomePageData }) {
  return (
    <>
      <div className="container-fluid fadeIn animated-long">
        <div className="row d-flex-grid gap-4 justify-content-between align-items-center pt-5 pt-xxl-0 pt-xl-0 pt-lg-0 pt-md-0 px-5">
          {realTimeHomePageData.map((item, key) => {
            return (
              <div className="col-4">
                <ExchangeDisplayItem key={key} exchange={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExchangesDisplay;
