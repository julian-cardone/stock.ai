function BusinessPage() {
  return (
    <>
      {/* {!loading ? ( */}
      <div className="container-lg my-5 text-center">
        <h2 className="text-center mb-5">
          enter your symbol and select a financial model
        </h2>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-3 col-lg-3 justify-content-center">
            <input
              class="form-control"
              type="text"
              placeholder="stock symbol"
            />
          </div>
          <div className="col-sm-3 col-lg-3 justify-content-center">
            <select class="form-control">
              <option disabled selected>model</option>
              <option>Default select</option>
            </select>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-sm-4 col-lg-6 justify-content-center">
            <button type="button" class="btn btn-outline-success">
              GENERATE
            </button>
          </div>
        </div>
      </div>
      {/* ) : ( */}
      {/* <div>THIS IS LOADING</div> */}
      {/* )} */}
    </>
  );
}

export default BusinessPage;
