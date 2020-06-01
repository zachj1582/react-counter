import React, { useState } from "react";
import ButtonPad from "./ButtonPad";

function Display(props) {
  let [display, setDisplay] = useState(0);
  let [countHist, setCountHist] = useState([]);

  const increment1 = () => {
    setDisplay((display += 1));
  };

  const increment2 = () => {
    setDisplay((display += 2));
  };

  const increment5 = () => {
    setDisplay((display += 5));
  };

  const increment10 = () => {
    setDisplay((display += 10));
  };

  const decrement1 = () => {
    setDisplay((display -= 1));
  };

  const reset = () => {
    setCountHist((countHist) => [...countHist, display]);
    setDisplay((display = 0));
  };

  return (
      <section className="display">
      {display}
      <ButtonPad
          inc1={increment1}
          inc2={increment2}
          inc5={increment5}
          inc10={increment10}
          dec1={decrement1}
          reset={reset}
        />
        {countHist}
    </section>
  );
}

export default Display;
