import React, { useEffect, useState } from "react";
import "./carousel.css";

function MarketsCarousel() {
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

  useEffect(() => {}, []);

  return (
    <div className="container-fluid bg-primary px-0">
      <div className="row d-flex">
        {currentItems.map((item, index) => {
          return (
            <div key={index} className="col-lg-2 col-md-2 col-sm-2">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketsCarousel;
