import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function FinancialsNavLink({ to, innerText }) {
  const location = useLocation();
  return (
    <>
      <Link
        className={`nav-link pb-1 financials-nav-link ${
          location.pathname === to ? "financials-nav-link-active" : ""
        }`}
        to={to}
        aria-current={location.pathname === to ? "page" : undefined}
      >
        {innerText}
      </Link>
    </>
  );
}
export default FinancialsNavLink;
