import React, { useState } from "react";
import ButtonPad from "./ButtonPad";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-train-station.css";

function Display(props) {
  let [display, setDisplay] = useState(0);
  let [countHist, setCountHist] = useState([]);
  let [hist, setHist] = useState(false)

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
    setCountHist([...countHist, display]);
    setDisplay((display = 0));
  };

  const showHist = () => {
    setHist(!hist)
  }

  return (
    <section className="display">
      <div className="ticker">
        <Odometer
          format="(,ddd).dd"
          duration={1000}
          value={display}
        />
      </div>
      <ButtonPad
        inc1={increment1}
        inc2={increment2}
        inc5={increment5}
        inc10={increment10}
        dec1={decrement1}
        reset={reset}
        showHist={showHist}
      />
      {hist && <div className='container' >Ticker history: <div className='hist' >{countHist.map(e => <p>{e}</p>)}</div></div>}
    </section>
  );
}

export default Display;
