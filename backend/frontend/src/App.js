import React, { useContext } from "react";
import SessionPage from "./components/SessionPage";
import BusinessPage from "./components/BusinessPage";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./components/Routes";
import Home from "./components/Home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "./components/Nav";
import CompanyPage from "./components/CompanyPage";
import { AppContext } from "./utils/context";

function App() {
  const { currentSymbol } = useContext(AppContext);

  return (
    <>
      <Nav />
      <Switch>
        <AuthRoute exact path="/" component={SessionPage} />

        <ProtectedRoute exact path="/home" component={Home} />

        {currentSymbol && (
          <ProtectedRoute
            exact
            path="/company"
            currentSymbol={currentSymbol}
            component={CompanyPage}
          />
        )}

        <ProtectedRoute exact path="/generate" component={BusinessPage} />

        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default App;
