import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";
import { useState } from "react";
import useSearchValidation from "../../hooks/useSearchValidation";

function Nav() {
  const location = useLocation();
  const [value, setValue] = useState();
  const { loading, validateSymbol } = useSearchValidation();
  const history = useHistory();

  const handleInputChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = await validateSymbol(value);
    if (valid) {
      history.push("/company/overview");
    }
  };

  return (
    <>
      <div className="container-fluid position-fixed px-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ps-lg-5 ps-md-3 ps-sm-1 navbar-custom-css">
          <div className="container-fluid">
            <Link className="logo-text" to="/home">
              stock.ai
            </Link>
            <form
              className="d-flex col-lg-5 col-md-5 col-sm-3 ms-5"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-2"
                value={value}
                onChange={handleInputChange}
                type="search"
                placeholder="Enter a stock symbol"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={loading}
              >
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
      </div>
    </>
  );
}

export default Nav;
