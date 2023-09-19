import { useEffect, useState } from "react";

function LoadingPage({ companyPageloading }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "...";
  const delay = 100; // Adjust the delay as desired

  useEffect(() => {
    const interval = setInterval(() => {
      if (!companyPageloading) {
        clearInterval(interval);
      }
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
        setDisplayText("");
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [text, delay, currentIndex, companyPageloading]);

  return (
    <>
      <div className="container-fluid">
        <div className="row pt-5 ps-3">
          <div className="col-12 d-flex">
            <h1>loading{displayText}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
