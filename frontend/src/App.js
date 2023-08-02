import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { useStorageKey } from "./hooks/useStorageKey";
import MainPage from "./components/MainPage";

function App() {

  const { data: storageKey, ...storageKeyUtils } = useStorageKey();
  const [isLoading, setIsLoading] = useState();


  return (
    <Switch>
      <MainPage></MainPage>
    </Switch>
  );
}

export default App;
