import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";

function Nav() {
  const location = useLocation();

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ps-lg-5 ps-md-3 ps-sm-1">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/home">
            Stock.ai
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
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
              <li class="nav-item">
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
      </nav>
    </>
  );
}

export default Nav;
