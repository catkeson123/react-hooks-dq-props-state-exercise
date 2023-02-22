import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorMapper = {
  sun: SunBaby,
  blue: BlueBaby,
  glowing: GlowingBaby,
};

function BabyHog(props) {
  const [weight, changeWeight] = useState(1);
  const [height, changeHeight] = useState(200);

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "+") {
      changeWeight(weight + 1);
      changeHeight(height + 10);
    } else if (e.target.name === "-") {
      changeWeight(weight - 1);
      changeHeight(height - 10);
    }
  }

  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color:</h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eyeColor]}
          style={{ height: `${height}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
