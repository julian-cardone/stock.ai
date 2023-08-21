import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";

function Nav() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ps-lg-5 ps-md-3 ps-sm-1">
        <div className="container-fluid">
          <Link className="navbar-brand logo-text" to="/home">
            stock.ai
          </Link>
          <form className="d-flex col-lg-5 col-md-5 col-sm-3 ms-5">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter a stock symbol or company name"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

export default Nav;
