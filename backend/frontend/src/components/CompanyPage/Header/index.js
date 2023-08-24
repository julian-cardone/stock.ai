import PriceChange from "./PriceChange";
import "./summary.css"

function Header({ realTimeHeaderData, staticHeaderData }) {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 px-5 pt-4">
            <h4 className="mb-0">
              {staticHeaderData.longName} (
              {staticHeaderData.underlyingSymbol})
            </h4>
            <p className="mb-0" id="small-para">
              {staticHeaderData.exchange} | Currency:{" "}
              {staticHeaderData.currency}
            </p>
          </div>
        </div>
        <PriceChange realTimeHeaderData={realTimeHeaderData} />
        <div className="row bg-success mx-4">
          <p className="my-1"></p>
        </div>
      </div>
    </>
  );
}

export default Header;
