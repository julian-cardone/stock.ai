import { useState } from "react";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import { useGPTFetch } from "../../hooks/useGPTFetch";
import "./index.css";
import UserNote from "./UserNote";

function BusinessPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { loading, sessionFetch } = useCustomFetch();
  const { gptFetch, info, setInfo, loadingTwo } = useGPTFetch();
  const [loadingState, setLoadingState] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  const handleSubimt = async (event) => {
    event.preventDefault();
    setLoadingState(true);

    await gptFetch("/info", inputValue);

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
        setInfo(data.error);
      }
    }
    setLoadingState(false);
  };

  // const pTag = () => {
  //   if (loadingState) {
  //     return (
  //       <div className="row d-flex justify-content-center">
  //         <div className="col-sm-9 col-lg-9 justify-content-center">
  //           <p id="text" className="mt-5 mb-0 typewriter">
  //             Loading...
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     <div className="row d-flex justify-content-center">
  //       <div className="col-sm-9 col-lg-9 justify-content-center">
  //         <p id="text" className="mt-5 mb-0 typewriter">
  //           {info}
  //         </p>
  //       </div>
  //     </div>;
  //   }
  // };

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
                  selectedOption.value === "" ||
                  loadingTwo ||
                  loadingState
                }
                type="submit"
                className="btn btn-outline-success"
              >
                {loadingState ? "Loading..." : "GENERATE + DOWNLOAD"}
              </button>
            </div>
          </div>
        </form>
        {info != null && (
          <div className="row d-flex justify-content-center">
            <div className="col-sm-9 col-lg-9 justify-content-center">
              <p id="text" className="mt-4 mb-0 typewriter">
                {info}
              </p>
            </div>
          </div>
        )}
        <UserNote></UserNote>
      </div>
    </>
  );
}

export default BusinessPage;
