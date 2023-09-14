import "./home.css";
import "../../animate.css";
import FeaturesDisplay from "./FeaturesDisplay";

function Home() {
  return (
    <>
      <div className="container-fluid px-0 container-spacing">
        <div className="container-fluid bg-primary text-white py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="fadeInLeft animated-short">
                  Welcome to our Financial Analysis Hub
                </h1>
                <p className="fadeInRight animated-long">
                  Our mission is to make financial data accessible and
                  understandable for everyone. With our full-stack financial
                  analysis application, you can effortlessly input a stock
                  symbol of a public company and gain access to a treasure trove
                  of financial information. Whether you're an investor looking
                  to make informed decisions or simply curious about a company's
                  financial health, our platform is your go-to resource.
                </p>
              </div>
              <div className="col-md-6">
                <h2 className="">CAROUSEL - with loading </h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-around align-items-center pb-5 pd-xxl-0 pb-xl-0 pb-lg-0 pb-md-0 px-4 bounceIn animated">
              <FeaturesDisplay />
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </div>
            <div className="col-md-6">
              <h2 className="fadeInRight animated-short">
                Explore Our Features
              </h2>
              <p className="fadeInLeft animated-long">
                Our platform simplifies financial analysis. Start by choosing a
                company to get an easy-to-understand overview with interactive
                historical data graphs. Delve into Financial Statements for
                digestible income, balance sheet, and cash flow data. Plus,
                create and download personalized financial models, like the
                Operating Assumptions report. Unlock financial insights
                effortlessly on our platform.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark text-white py-4">
          <div className="container">
            <div className="bar-svg-div d-flex justify-content-center gap-2">
              <a
                href="https://github.com/julian-cardone"
                target="_blank"
                rel="noopener"
              >
                <svg
                  className="social-svg"
                  viewBox="0 0 24 24"
                  width="50px"
                  height="60x"
                >
                  <path d="M 10.9 2.1 c -4.6 0.5 -8.3 4.2 -8.8 8.7 c -0.5 4.7 2.2 8.9 6.3 10.5 C 8.7 21.4 9 21.2 9 20.8 v -1.6 c 0 0 -0.4 0.1 -0.9 0.1 c -1.4 0 -2 -1.2 -2.1 -1.9 c -0.1 -0.4 -0.3 -0.7 -0.6 -1 C 5.1 16.3 5 16.3 5 16.2 C 5 16 5.3 16 5.4 16 c 0.6 0 1.1 0.7 1.3 1 c 0.5 0.8 1.1 1 1.4 1 c 0.4 0 0.7 -0.1 0.9 -0.2 c 0.1 -0.7 0.4 -1.4 1 -1.8 c -2.3 -0.5 -4 -1.8 -4 -4 c 0 -1.1 0.5 -2.2 1.2 -3 C 7.1 8.8 7 8.3 7 7.6 c 0 -0.4 0 -0.9 0.2 -1.3 C 7.2 6.1 7.4 6 7.5 6 c 0 0 0.1 0 0.1 0 C 8.1 6.1 9.1 6.4 10 7.3 C 10.6 7.1 11.3 7 12 7 s 1.4 0.1 2 0.3 c 0.9 -0.9 2 -1.2 2.5 -1.3 c 0 0 0.1 0 0.1 0 c 0.2 0 0.3 0.1 0.4 0.3 C 17 6.7 17 7.2 17 7.6 c 0 0.8 -0.1 1.2 -0.2 1.4 c 0.7 0.8 1.2 1.8 1.2 3 c 0 2.2 -1.7 3.5 -4 4 c 0.6 0.5 1 1.4 1 2.3 v 2.6 c 0 0.3 0.3 0.6 0.7 0.5 c 3.7 -1.5 6.3 -5.1 6.3 -9.3 C 22 6.1 16.9 1.4 10.9 2.1 Z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/juliancardone/"
                target="_blank"
                rel="noopener"
              >
                <svg
                  className="social-svg"
                  viewBox="0 0 50 50"
                  width="45px"
                  height=""
                >
                  <path d="M 25 2 C 12.318 2 2 12.317 2 25 s 10.318 23 23 23 s 23 -10.317 23 -23 S 37.682 2 25 2 Z M 18 35 h -4 V 20 h 4 V 35 Z M 16 17 c -1.105 0 -2 -0.895 -2 -2 c 0 -1.105 0.895 -2 2 -2 s 2 0.895 2 2 C 18 16.105 17.105 17 16 17 Z M 37 35 h -4 v -5 v -2.5 c 0 -1.925 -1.575 -3.5 -3.5 -3.5 S 26 25.575 26 27.5 V 35 h -4 V 20 h 4 v 1.816 C 27.168 20.694 28.752 20 30.5 20 c 3.59 0 6.5 2.91 6.5 6.5 V 35 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
