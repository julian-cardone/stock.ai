import ExchangesDisplay from "./ExchangeDisplay";

function WelcomeDiv({ loading, realTimeHomePageData }) {
  return (
    <>
      <div className="container-fluid welcome-div text-white py-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-6">
              <h1 className="fadeInLeft animated-short home-header pb-3">
                welcome to your market analysis hub
              </h1>
              <p className="fadeInRight animated-long">
                My mission is to make financial data accessible and
                understandable for everyone. With our full-stack financial
                analysis application, you can effortlessly input a stock symbol
                of a public company and gain access to a treasure trove of
                financial information. Whether you're an investor looking to
                make informed decisions or simply curious about a company's
                financial health, our platform is your go-to resource.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              {!loading && (
                <ExchangesDisplay realTimeHomePageData={realTimeHomePageData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeDiv;
