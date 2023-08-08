import { useState } from "react";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import { useGPTFetch } from "../../hooks/useGPTFetch";

function BusinessPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { loading, sessionFetch } = useCustomFetch();
  const [error, setError] = useState(null);
  const { gptFetch } = useGPTFetch();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  const handleSubimt = async (event) => {
    event.preventDefault();
    setError(null);

    const resOne = await gptFetch("/info", inputValue);
    console.log(resOne)
    if ("error" in resOne) {
      setError(resOne.error);
      return;
    }

    const res = await sessionFetch(`${selectedOption}`, {
      method: "POST",
      body: JSON.stringify({ inputValue: inputValue }),
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${inputValue}_operating_assumptions.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      const data = await res.json();
      if ("error" in data) {
        setError(data.error);
      }
    }
  };

  return (
    <>
      <div className="container-lg my-5 text-center">
        <h2 className="text-center mb-5">
          enter your symbol and select a financial model
        </h2>
        <form onSubmit={handleSubimt}>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-2 col-lg-2 justify-content-center">
              <input
                className="form-control"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="stock symbol"
              />
            </div>
            <div className="col-sm-4 col-lg-4 justify-content-center">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="form-control"
              >
                <option value="" disabled>
                  model
                </option>
                <option value="/operating_assumptions">
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
                GENERATE + DOWNLOAD
              </button>
              {error != null && (
                <div className="row d-flex justify-content-center">
                  <p className="mt-2">{error}</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BusinessPage;
