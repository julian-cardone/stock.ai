import "./companyNav.css";
import { CompanyNavLink } from "./CompanyNavLink";

function CompanyNav() {
  return (
    <>
      <div className="container-sm mt-3">
        <nav className="navbar navbar-expand-md navbar-light">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav d-flex justify-content-around w-100"
              id="company-nav"
            >
              <CompanyNavLink to={"/company/overview"} innerText={"Overview"} />
              <CompanyNavLink to={"/home"} innerText={"Home"} />
              <CompanyNavLink to={"/home"} innerText={"Home"} />
              <CompanyNavLink to={"/home"} innerText={"Home"} />
              <CompanyNavLink to={"/home"} innerText={"Home"} />
              <CompanyNavLink to={"/home"} innerText={"Home"} />
              <CompanyNavLink to={"/home"} innerText={"Home"} />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default CompanyNav;
