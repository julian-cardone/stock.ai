import React, { useState } from "react";
import { useStorageKey } from "./hooks/useStorageKey";
import MainPage from "./components/MainPage";

function App() {
  const { data: storageKey, ...storageKeyUtils } = useStorageKey();
  // const [isLoading, setIsLoading] = useState();

  return (
    <>
      {storageKey == null && (
        <MainPage createSession={storageKeyUtils.createSession} loading={storageKeyUtils.loading}/>
      )}
      {storageKey != null && <div>there is a storage key</div>}
      {}
    </>
  );
}

export default App;
