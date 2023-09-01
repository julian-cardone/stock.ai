import "./companyNav.css";
import { CompanyNavLink } from "./CompanyNavLink";

function CompanyNav() {
  return (
    <>
      <div className="container-fluid px-0 company-nav-container">
        <div className="container-sm mt-3">
          <nav className="navbar navbar-expand-md navbar-light pt-0">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav d-flex justify-content-around w-100 align-items-end"
                  id="company-nav"
                >
                  <CompanyNavLink
                    to={"/company/overview"}
                    innerText={"Overview"}
                  />
                  <CompanyNavLink
                    to={"/company/financials/income_statement"}
                    innerText={"Financial Statements"}
                    acceptedRoutes={[
                      "/company/financials/income_statement",
                      "/company/financials/balance_sheet",
                      "/company/financials/cash_flow_statement",
                    ]}
                  />
                  <CompanyNavLink to={"/home"} innerText={"Home"} />
                  <CompanyNavLink to={"/home"} innerText={"Home"} />
                  <CompanyNavLink to={"/home"} innerText={"Home"} />
                  <CompanyNavLink to={"/home"} innerText={"Home"} />
                  <CompanyNavLink to={"/home"} innerText={"Home"} />
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default CompanyNav;
