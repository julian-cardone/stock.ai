import { useWrappedRequest } from "../../hooks/useWrappedRequest";

function LoadingPage() {
  const { loading } = useWrappedRequest();

  return (
    <>
      <div>this is the loading page</div>
    </>
  );
}

export default LoadingPage;
