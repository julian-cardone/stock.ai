import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function CompanyNav() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="ms-auto px-5">
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
              <ul className="navbar-nav d-flex justify-content-space-around align-items-center w-100">
                <li className="nav-item px-2">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/home" ? "active" : ""
                    }`}
                    to="/home"
                    aria-current={
                      location.pathname === "/home" ? "page" : undefined
                    }
                  >
                    Home <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/generate" ? "active" : ""
                    }`}
                    to="/generate"
                    aria-current={
                      location.pathname === "/generate" ? "page" : undefined
                    }
                  >
                    Generate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CompanyNav;
