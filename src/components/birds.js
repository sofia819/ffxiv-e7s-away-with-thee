import React from "react";
import BirdOne from "../resources/bird_1.png";
import BirdTwo from "../resources/bird_2.png";
import BirdThree from "../resources/bird_3.png";
import BirdFour from "../resources/bird_4.png";
import "./birds.scss";

export const Birds = () => {
  return (
    <>
      <img src={BirdOne} className="bird--image" />
      <img src={BirdTwo} className="bird--image" />
      <img src={BirdThree} className="bird--image" />
      <img src={BirdFour} className="bird--image" />
    </>
  );
};
