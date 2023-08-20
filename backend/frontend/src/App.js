import React from "react";
import { useStorageKey } from "./hooks/useStorageKey";
import MainPage from "./components/MainPage";
import BusinessPage from "./components/BusinessPage";
import { Route, Switch } from "react-router-dom";

function App() {
  const { data: storageKey, ...storageKeyUtils } = useStorageKey();

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <MainPage
              createSession={storageKeyUtils.createSession}
              loading={storageKeyUtils.loading}
              storageKey={storageKey}
              {...props} // Pass route props here
            />
          )}
        />
        <Route exact path="/generate" component={BusinessPage} />
      </Switch>
    </>
  );
}

export default App;
