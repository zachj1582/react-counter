import React from "react";

export default function ButtonPad(props) {
  return (
    <div>
      <div className="btn btn-pad-row1">
        <button onClick={() => props.inc1()}>+1</button>
        <button onClick={() => props.dec1()}>-1</button>
      </div>
      <div className="btn btn-pad-row2">
        <button onClick={() => props.inc2()}>+2</button>
        <button onClick={() => props.inc5()}>+5</button>
        <button onClick={() => props.inc10()}>+10</button>
      </div>
      <div className='btn btn-pad-row3' >
        <button onClick={() => props.reset()}>Reset</button>
        <button onClick={()=> props.showHist()} >History</button>
      </div>
    </div>
  );
}
