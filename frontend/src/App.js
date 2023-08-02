import React from "react";
import { useStorageKey } from "./hooks/useSotrageKey";

function App() {

  const { data: storageKey, ...storageKeyUtils } = useStorageKey();

  return (
    <div className="App">
      <button onClick={() => storageKeyUtils.createSession()}>begin session</button>
    </div>
  );
}

export default App;
