import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { useStorageKey } from "./hooks/useStorageKey";

function App() {

  const { data: storageKey, ...storageKeyUtils } = useStorageKey();
  const [isLoading, setIsLoading] = useState();


  return (
    <Switch>

    </Switch>
  );
}

export default App;
