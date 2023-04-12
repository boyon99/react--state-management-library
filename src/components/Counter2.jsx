import React from "react";
import {
  decrease,
  increase,
  increaseByDiff,
  useCounter,
} from "../store/slices/counterSlice";

const Counter2 = () => {
  const { number, dispatch } = useCounter();
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
      <button onClick={() => dispatch(increaseByDiff(2))}>+2</button>
      <button onClick={() => dispatch(increaseByDiff(-2))}>-2</button>
    </div>
  );
};

export default Counter2;
