import React, { useEffect, useState } from "react";
import image1 from "../Assets/banner_mens.png";
import image2 from "../Assets/banner_women.png";
import image3 from "../Assets/banner_kids.png";
import Product from "./product";
function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentSlide ? "active" : ""}
        />
      ))}
    </div>
  );
}
function Content() {
  return (
    <div className="main-content">
      <ImageSlider />
      <Product/>
    </div>
  );
}
export default Content;
