import React from "react";
import MainPage from "./components/MainPage";
import BusinessPage from "./components/BusinessPage";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./components/Routes";

function App() {
  return (
    <>
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <ProtectedRoute exact path="/generate" component={BusinessPage} />
      </Switch>
    </>
  );
}

export default App;
