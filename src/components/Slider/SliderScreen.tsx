import React, { useEffect, useState } from "react";
import { sliderData } from "./SliderData";
import styled from "styled-components";
import "./slider.css";

const Slider= styled.div`
  display: block;
  text-align: center;
  overflow:hidden;
  height:92vh;
`;

const length = sliderData.length - 1;

const ImageSlides = () => {
  const [image, setImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(image === length ? 0 : image + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [image]);

  return (
    <Slider>
      
      {sliderData.map((item, index) => (
        <img
          key={item.id}
          className={index === image ? "slider active" : "inactive"}
          src = {item.url}
          alt = "slider"
          height={"100%"}
          width={"100%"}
          style= {{objectFit:"cover"}}      
        />
      ))} 
      <h1 className="slider-text"> Can't-miss collection </h1>
      <button className="slider-button">Shop now</button>
    </Slider>
  );
};

export default ImageSlides;
