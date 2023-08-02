import { useState } from "react";
import { useCustomFetch } from "../../hooks/useCustomFetch";

function BusinessPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { loading, sessionFetch } = useCustomFetch();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubimt = async (event) => {
    event.preventDefault();
    const res = await sessionFetch(`${selectedOption}`, {
      method: "POST",
      body: JSON.stringify({ inputValue: inputValue }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className="container-lg my-5 text-center">
        <h2 className="text-center mb-5">
          enter your symbol and select a financial model
        </h2>
        <form onSubmit={handleSubimt}>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-3 col-lg-3 justify-content-center">
              <input
                className="form-control"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="stock symbol"
              />
            </div>
            <div className="col-sm-3 col-lg-3 justify-content-center">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="form-control"
              >
                <option value="" disabled>
                  model
                </option>
                <option value="/historical_operating_assumptions">
                  Historical Operating Assumptions
                </option>
              </select>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-sm-4 col-lg-6 justify-content-center">
              <button
                disabled={
                  loading ||
                  inputValue.length === 0 ||
                  selectedOption.value === ""
                }
                type="submit"
                className="btn btn-outline-success"
              >
                GENERATE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BusinessPage;
