import { Link, useLocation } from "react-router-dom";

export const CompanyNavLink = ({ to, innerText }) => {
  /*
  Parameters: current location (ex: "/home"), target location (ex: "/generate"), innerText (ex: "Generate")
  
  Returns: Custom Link for the company nav bar
  */
  const location = useLocation();

  return (
    <li className="nav-item px-2">
      <Link
        className={`nav-link ${location.pathname === to ? "active company-nav-active" : ""}`}
        to={to}
        aria-current={location.pathname === to ? "page" : undefined}
      >
        {innerText}
      </Link>
    </li>
  );
};
