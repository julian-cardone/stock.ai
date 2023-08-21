import { useCallback, useState } from "react";
import { useWrappedRequest } from "./useWrappedRequest";

export function useStorageKey() {
  const [storageKey, setStorageKey] = useState(
    localStorage.getItem("stock-ai-session-token") || null
  );
  const { loading, wrappedRequest } = useWrappedRequest();

  const createSession = useCallback(async () => {
    if (!storageKey) {
      wrappedRequest(async () => {
        const res = await fetch("/start_session", {
          method: "POST",
        });
        const data = await res.json();
        const sessionToken = data.session_token;
        localStorage.setItem("stock-ai-session-token", sessionToken);
        setStorageKey(sessionToken);
      });
    }
  }, [storageKey, wrappedRequest]);

  const invalidateSession = useCallback(async () => {
    localStorage.removeItem("stock-ai-session-token");
    setStorageKey(null);
  }, []);

  return { data: storageKey, loading, createSession, invalidateSession };
}
