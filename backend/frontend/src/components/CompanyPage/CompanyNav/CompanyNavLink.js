import { Link, useLocation } from "react-router-dom";

export const CompanyNavLink = ({ to, innerText, acceptedRoutes = null }) => {
  /*
  Parameters: current location (ex: "/home"), target location (ex: "/generate"), innerText (ex: "Generate")
  
  Returns: Custom Link for the company nav bar
  */
  const location = useLocation();

  return (
    <li
      className={`nav-item px-2 ${
        location.pathname === to ? "company-nav-active" : ""
      }`}
    >
      <Link
        className={`nav-link ${
          location.pathname === to ||
          acceptedRoutes?.includes(location.pathname)
            ? "active"
            : ""
        }`}
        to={to}
        aria-current={location.pathname === to ? "page" : undefined}
      >
        {innerText}
      </Link>
    </li>
  );
};
