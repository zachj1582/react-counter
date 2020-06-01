import React from "react";

export default function ButtonPad(props) {


  return (
    <div>
      <button onClick={()=>props.inc1()}>+1</button>
      <button onClick={()=>props.dec1()}>-1</button>
      <button onClick={()=>props.inc2()}>+2</button>
      <button onClick={()=>props.inc5()}>+5</button>
      <button onClick={()=>props.inc10()}>+10</button>
      <button onClick={()=>props.reset()}>Reset</button>
    </div>
  );
}
