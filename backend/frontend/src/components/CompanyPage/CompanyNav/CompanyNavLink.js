import { Link, useLocation } from "react-router-dom";

export const CompanyNavLink = ({ to, innerText, acceptedRoutes = null }) => {
  /*
  Parameters: current location (ex: "/home"), target location (ex: "/generate"), innerText (ex: "Generate")
  
  Returns: Custom Link for the company nav bar
  */
  const location = useLocation();
  const active =
    location.pathname === to || acceptedRoutes?.includes(location.pathname);

  return (
    <li className={`nav-item px-2 ${active ? "company-nav-active" : ""}`}>
      <Link
        className={`nav-link ${active ? "active" : ""}`}
        to={to}
        aria-current={active ? "page" : undefined}
      >
        {innerText}
      </Link>
    </li>
  );
};
