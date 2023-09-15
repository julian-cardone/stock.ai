import { useState } from "react";

function FeaturesDisplay() {
  const [activeParagraph, setActiveParagraph] = useState("paragraph-1");

  return (
    <>
      <div className="container py-5">
        <div className="row py-3  explore-features">
          <div className="col-md-6 d-flex justify-content-around align-items-center pb-5 pd-xxl-0 pb-xl-0 pb-lg-0 pb-md-0 px-4 bounceIn animated">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48"
              height="48"
              className="scaleAnimationOne animated-long feature-svg"
              onMouseOver={() => setActiveParagraph("paragraph-2")}
              onMouseOut={() => setActiveParagraph("paragraph-1")}
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="layer_1-2" data-name="layer 1">
                  <path
                    class="cls-1"
                    d="M19 38a19 19 0 1 1 18.5-14.67l-1.94-.46A17.27 17.27 0 0 0 36 19a17 17 0 1 0-17 17 17.27 17.27 0 0 0 3.87-.44l.46 1.94A19 19 0 0 1 19 38z"
                  />
                  <path
                    class="cls-1"
                    d="M28 20h-9a1 1 0 0 1-1-1V8h2v10h8zM4 18h2v2H4zM18 32h2v2h-2zM32 18h2v2h-2zM30 11h2v2h-2zM25 6h2v2h-2zM18 4h2v2h-2zM11 6h2v2h-2zM6 11h2v2H6zM6 25h2v2H6zM11 30h2v2h-2zM36 43a4 4 0 0 1-4-4h2a2 2 0 1 0 2-2 4 4 0 1 1 4-4h-2a2 2 0 1 0-2 2 4 4 0 0 1 0 8z"
                  />
                  <path
                    class="cls-1"
                    d="M35 42h2v3h-2zM35 27h2v3h-2zM42 35h2v2h-2zM28 35h2v2h-2z"
                  />
                  <path
                    class="cls-1"
                    d="M36 48a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-22a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-10 0 145 145"
              width="48"
              height="48"
              className="scaleAnimationTwo animated-long feature-svg"
              onMouseOver={() => setActiveParagraph("paragraph-3")}
              onMouseOut={() => setActiveParagraph("paragraph-1")}
            >
              <path d="M89.495 32.46h4v66.811h-4zM34.507 32.46h4v66.811h-4zM105.035 128H22.966v-8.682c0-5.524 4.551-10.019 10.146-10.019h61.779c5.594 0 10.145 4.494 10.145 10.019V128zm-78.069-4h74.069v-4.682c0-3.318-2.757-6.019-6.145-6.019H33.111c-3.389 0-6.146 2.7-6.146 6.019V124z" />
              <path d="M93.533 112.633H34.47c-2.6 0-4.715-2.097-4.715-4.674v-5.346c0-2.576 2.115-4.672 4.715-4.672h59.063c2.6 0 4.715 2.096 4.715 4.672l.001 5.346c-.001 2.577-2.116 4.674-4.716 4.674zM34.47 101.941c-.395 0-.715.302-.715.672v5.346c0 .371.32.674.715.674h59.063c.395 0 .715-.303.715-.674v-5.346c0-.37-.321-.672-.716-.672H34.47zM95.219 34.642c-3.677 0-7.353-1.377-10.151-4.132-2.254-2.221-3.495-5.174-3.494-8.316a11.587 11.587 0 0 1 3.494-8.309c3.862-3.801 10.145-3.8 14.005 0a8.133 8.133 0 0 1 2.452 5.834 8.13 8.13 0 0 1-2.453 5.831l-2.805-2.852a4.157 4.157 0 0 0-.001-5.962c-2.313-2.277-6.077-2.277-8.392 0a7.611 7.611 0 0 0-2.301 5.459c0 2.063.816 4.003 2.301 5.466 4.049 3.985 10.639 3.986 14.691-.001 2.535-2.494 3.932-5.809 3.932-9.334 0-3.526-1.396-6.843-3.933-9.34-3.151-3.101-6.961-4.853-10.727-4.933-5.314-.115-15.087-.001-15.186 0l-.047-4c.098-.001 9.936-.118 15.319 0 4.788.102 9.563 2.262 13.445 6.081 3.307 3.255 5.128 7.584 5.127 12.191-.001 4.605-1.821 8.933-5.127 12.185-2.796 2.754-6.473 4.131-10.149 4.132z" />
              <path d="M32.781 34.642c-3.676 0-7.353-1.377-10.152-4.131-3.305-3.252-5.125-7.58-5.126-12.185 0-4.606 1.82-8.936 5.126-12.191C26.514 2.315 31.29.156 36.078.053c5.388-.117 39.616-.004 41.071 0l-.014 4c-.355-.001-35.633-.116-40.972 0-3.766.08-7.576 1.833-10.729 4.934-2.535 2.496-3.932 5.813-3.932 9.339.001 3.525 1.397 6.84 3.932 9.334 4.052 3.986 10.643 3.986 14.692 0a7.616 7.616 0 0 0 2.302-5.465c0-2.06-.817-3.999-2.302-5.458-2.313-2.278-6.078-2.278-8.391-.001a4.155 4.155 0 0 0-1.26 2.983 4.15 4.15 0 0 0 1.258 2.98l-2.804 2.853a8.121 8.121 0 0 1-2.454-5.832 8.122 8.122 0 0 1 2.454-5.834c3.858-3.801 10.141-3.801 14.002 0 2.254 2.217 3.496 5.168 3.496 8.309.001 3.143-1.24 6.096-3.496 8.316-2.796 2.753-6.473 4.13-10.15 4.131z" />
              <g>
                <path d="M41.648 14.648h44.354v4H41.648z" />
              </g>
              <g>
                <path d="M48.821 91.357a2 2 0 0 1-2-2V36.8a2 2 0 0 1 4 0v52.557a2 2 0 0 1-2 2z" />
              </g>
              <g>
                <path d="M64.266 91.357a2 2 0 0 1-2-2V28.669a2 2 0 0 1 4 0v60.688a2 2 0 0 1-2 2z" />
              </g>
              <g>
                <path d="M79.711 91.357a2 2 0 0 1-2-2V36.8a2 2 0 0 1 4 0v52.557a2 2 0 0 1-2 2z" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-10 0 145 145"
              width="48"
              height="48"
              className="scaleAnimationThree animated-long feature-svg"
              onMouseOver={() => setActiveParagraph("paragraph-4")}
              onMouseOut={() => setActiveParagraph("paragraph-1")}
            >
              <path d="M125.411 127.056H0V.944h4.008v122.103h121.403z" />
              <path d="M13.015 115.879h4.008v7.518h-4.008zM30.071 115.879h4.008v7.518h-4.008zM47.126 115.879h4.008v7.518h-4.008zM64.184 115.879h4.008v7.518h-4.008zM81.239 115.879h4.008v7.518h-4.008zM98.293 115.879h4.008v7.518h-4.008zM115.351 115.879h4.009v7.518h-4.009z" />
              <g>
                <path d="M1.742 5.673h7.472v4.008H1.742zM1.742 22.823h7.472v4.008H1.742zM1.742 39.977h7.472v4.008H1.742zM1.742 57.129h7.472v4.008H1.742zM1.742 74.281h7.472v4.009H1.742zM1.742 91.433h7.472v4.009H1.742zM1.742 108.586h7.472v4.009H1.742z" />
              </g>
              <g>
                <path d="M77.015 79.782 61.112 63.789l-5.259 5.29-2.843-2.826 8.101-8.15 15.904 15.994 47.56-47.83 2.842 2.826z" />
              </g>
              <g>
                <path d="m42.354 76.973 2.842 2.826-29.742 29.906-2.842-2.826z" />
              </g>
              <g>
                <path d="M128 48.153h-4.009V29.684H105.64v-4.008H128z" />
              </g>
              <g>
                <path d="M128 78.858h-4.009V60.392H105.64v-4.009H128z" />
              </g>
              <g>
                <path d="M80.196 107.29 34.712 61.549 18.003 78.353l-2.841-2.827 19.55-19.661 45.484 45.74 44.379-44.63 2.842 2.825z" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              className="scaleAnimationFour animated-long feature-svg"
              viewBox="0 0 48 48"
              onMouseOver={() => setActiveParagraph("paragraph-5")}
              onMouseOut={() => setActiveParagraph("paragraph-1")}
            >
              <g data-name="14-accounting">
                <path d="M12 32H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h20a5.006 5.006 0 0 1 5 5v11h-2V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h7z" />
                <path d="M9 19H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-3-2h2v-2H6zM18 16h-2v-1h-2v1h-2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM26 16h-2v-1h-2v1h-2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM9 27H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-3-2h2v-2H6zM1 8h25v2H1zM4 4h2v2H4zM8 4h6v2H8zM38 38h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2z" />
                <path d="M38 42h-2a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-2v-2h2a3 3 0 0 1 0 6zM36 31h2v2h-2z" />
                <path d="M36 41h2v2h-2z" />
                <path d="M37 48a11 11 0 1 1 11-11 11.013 11.013 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9zM25 44h-8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3v2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8z" />
                <path d="M24 38h-6c-2.949 0-4-1.55-4-3v-2a3 3 0 0 1 3-3v2a1 1 0 0 0-1 1v2c0 .9 1.4 1 2 1h6z" />
                <path d="M25 32h-8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h14v2H17a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8z" />
                <path d="M31 26H17a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3zm-14-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM42 22a1 1 0 0 1-1-1v-8a3 3 0 0 0-3-3h-6V8h6a5.006 5.006 0 0 1 5 5v5.586l3.293-3.293 1.414 1.414-5 5A1 1 0 0 1 42 22z" />
                <path d="m36.293 16.707 1.414-1.415 5 5-1.414 1.414z" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 130"
              width="48"
              height="48"
              className="scaleAnimationFive animated-long feature-svg"
              onMouseOver={() => setActiveParagraph("paragraph-6")}
              onMouseOut={() => setActiveParagraph("paragraph-1")}
            >
              <path d="M117.193 7.724H10.807a6.257 6.257 0 0 0-6.25 6.25v77.678a6.257 6.257 0 0 0 6.25 6.25h38.066c-.572 10.348-3.409 16.74-4.523 18.874h-4.673a1.75 1.75 0 0 0 0 3.5h48.646a1.75 1.75 0 0 0 0-3.5h-4.678c-1.115-2.119-3.945-8.466-4.518-18.876h38.066a6.257 6.257 0 0 0 6.25-6.25V13.974a6.257 6.257 0 0 0-6.25-6.25zm-106.386 3.5h106.386a2.754 2.754 0 0 1 2.75 2.75v60.965h-4.972V17.946a1.751 1.751 0 0 0-1.75-1.75H14.779a1.751 1.751 0 0 0-1.75 1.75v56.993H8.057V13.974a2.754 2.754 0 0 1 2.75-2.75zm5.722 63.715V19.7h94.942v55.239zm63.23 41.837H48.241A53.1 53.1 0 0 0 52.377 97.9h23.246a53.1 53.1 0 0 0 4.136 18.876zM117.193 94.4H10.807a2.754 2.754 0 0 1-2.75-2.75V78.439h111.886v13.213a2.754 2.754 0 0 1-2.75 2.748z" />
              <path d="M64 80.367a6.054 6.054 0 1 0 6.054 6.054A6.061 6.061 0 0 0 64 80.367zm0 8.607a2.554 2.554 0 1 1 2.554-2.553A2.556 2.556 0 0 1 64 88.974zM95.677 25.752H32.323a1.75 1.75 0 0 0-1.75 1.75v39.631a1.749 1.749 0 0 0 1.75 1.75h63.354a1.749 1.749 0 0 0 1.75-1.75V27.5a1.75 1.75 0 0 0-1.75-1.748zM43.663 45.567h-9.59V39.16h9.59zm3.5-6.407h46.764v6.407H47.163zm-13.09 9.907h9.59v6.409h-9.59zm13.09 0h46.764v6.409H47.163zM93.927 35.66H47.163v-6.408h46.764zm-50.264-6.408v6.408h-9.59v-6.408zm-9.59 29.724h9.59v6.407h-9.59zm13.09 6.407v-6.407h46.764v6.407z" />
            </svg>
          </div>
          <div className="col-md-6">
            <h1 className="fadeInRight animated-short home-header pb-3">
              explore the features
            </h1>
            <div className="paragraphs-home fadeInLeft animated-long">
              <p
                id="paragraph-1"
                className={
                  activeParagraph === "paragraph-1" ? "active " : "inactive "
                }
              >
                stock.ai simplifies financial analysis. Start by choosing a
                company to get an easy-to-understand overview with interactive
                historical data graphs. Delve into Financial Statements for
                digestible income, balance sheet, and cash flow data. Plus,
                create and download personalized pro-forma financial models.
                Unlock financial insights effortlessly. More features coming
                soon!
              </p>
              <p
                id="paragraph-2"
                className={`${
                  activeParagraph === "paragraph-2" ? "active " : "inactive "
                }
                `}
              >
                access real-time capital markets data and live price updates
              </p>
              <p
                id="paragraph-3"
                className={`${
                  activeParagraph === "paragraph-3" ? "active " : "inactive "
                }
                `}
              >
                view interactive historical pricing graphs and data analyses
              </p>
              <p
                id="paragraph-4"
                className={`${
                  activeParagraph === "paragraph-4" ? "active " : "inactive "
                }
                `}
              >
                financial ratios and metrics at your fingertips
              </p>
              <p
                id="paragraph-5"
                className={`${
                  activeParagraph === "paragraph-5" ? "active " : "inactive "
                }
                `}
              >
                financial statements in a digestible format
              </p>
              <p
                id="paragraph-6"
                className={`${
                  activeParagraph === "paragraph-6" ? "active " : "inactive "
                }
                `}
              >
                generate pro-forma financial statements with the click of a
                button
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesDisplay;
