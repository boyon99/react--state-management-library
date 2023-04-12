// presenter
import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <p>{number}</p>
      <button onClick={onIncrease}>+3</button>
      <button onClick={onDecrease}>-3</button>
    </div>
  );
};

export default Counter;
