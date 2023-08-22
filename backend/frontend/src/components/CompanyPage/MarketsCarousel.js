import React, { useEffect, useState } from "react";
import "./carousel.css";

function MarketsCarousel() {
  const [leftValue, setLeftValue] = useState(0);
  const [length, setLength] = useState(0);

  const carouselItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
  ];

  let currentItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ];

  console.log(length);
  //if less than 576 pixels, hide the carousel
  //the idea was to move the position to the right, and shift the array whenever it reaches the position of the next div
  //not bad, come back to this later

  // useEffect(() => {
  //   const carouselItems = document.querySelectorAll(".custom-carousel-item");
  //   const slide = setInterval(() => {
  //     carouselItems.forEach((element) => {
  //       element.style.left = `${leftValue + 0.1}px`;
  //     });
  //     setLeftValue((prev) => prev + 0.1);
  //   }, 1);

  //   return () => clearInterval(slide);
  // }, [leftValue]);

  return (
    <div className="container-fluid bg-primary">
      <div className="row d-flex px-0">
        {currentItems.map((item, index) => {
          return (
            <div
              key={index}
              className="custom-carousel-item col-lg-2 col-md-2 col-sm-2 px-0"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketsCarousel;
