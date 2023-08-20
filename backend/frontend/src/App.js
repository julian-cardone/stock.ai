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
        {storageKey == null && (
          <MainPage
            createSession={storageKeyUtils.createSession}
            loading={storageKeyUtils.loading}
          />
        )}
        {storageKey != null && (
          <div>This is the home page</div>
        )}
        <Route exact path="/generate" component={BusinessPage}></Route>
      </Switch>
    </>
  );
}

export default App;
