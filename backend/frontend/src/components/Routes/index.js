import { Route, Redirect } from "react-router-dom";
import { useStorageKey } from "../../hooks/useStorageKey";

export const AuthRoute = ({ component: Component, path, exact }) => {
  const { data: storageKey, ...storageKeyUtils } = useStorageKey();

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        storageKey == null ? (
          <Component
            createSession={storageKeyUtils.createSession}
            loading={storageKeyUtils.loading}
          />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { data: storageKey } = useStorageKey();

  return (
    <Route
      {...rest}
      render={(props) =>
        storageKey != null ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
