import React from "react";

function SliderImage({ src }) {
  const sliderImageStyles = {
    width: 100 + "%",
    height: "auto",
  };
  return <img src={src} alt="Slide-image" style={sliderImageStyles}></img>;
}

export default SliderImage;
