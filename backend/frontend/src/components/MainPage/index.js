function MainPage({ createSession, loading, storageKey }) {
  return (
    <>
      {storageKey == null &&
        (!loading ? (
          <div className="container-lg my-5 text-center">
            <h2 className="text-center mb-4">
              click begin to create an instance
            </h2>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-4 col-lg-6 justify-content-center">
                <button
                  onClick={() => createSession()}
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  BEGIN
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>THIS IS LOADING</div>
        ))}
      {storageKey != null && <div>this is the home page</div>}
    </>
  );
}

export default MainPage;
