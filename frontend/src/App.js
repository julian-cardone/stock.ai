import React, { useState } from "react";
import { useStorageKey } from "./hooks/useStorageKey";
import MainPage from "./components/MainPage";
import BusinessPage from "./components/BusinessPage";

function App() {
  const { data: storageKey, ...storageKeyUtils } = useStorageKey();
  // const [isLoading, setIsLoading] = useState();

  return (
    <>
      {storageKey == null && (
        <MainPage
          createSession={storageKeyUtils.createSession}
          loading={storageKeyUtils.loading}
        />
      )}
      {storageKey != null && <BusinessPage></BusinessPage>}
      {}
    </>
  );
}

export default App;
