import React from "react";
import SessionPage from "./components/SessionPage";
import BusinessPage from "./components/BusinessPage";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./components/Routes";
import Home from "./components/Home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "./components/Nav";
import CompanyPage from "./components/CompanyPage";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { data: searchData } = useSearch();

  return (
    <>
      <Nav />
      <Switch>
        <AuthRoute exact path="/" component={SessionPage} />

        <ProtectedRoute exact path="/home" component={Home} />

        <ProtectedRoute
          exact
          path="/company"
          component={CompanyPage}
          searchData={searchData}
        />

        <ProtectedRoute exact path="/generate" component={BusinessPage} />

        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default App;
