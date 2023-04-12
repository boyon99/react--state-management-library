// container
// container
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCount, decCount } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);

  const onIncrease = () => {
    dispatch(incCount(3)); // dispatch({type:INC_COUNT})
  };

  const onDecrease = () => {
    dispatch(decCount(2));
  };

  return (
    <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
  );
}

export default CounterContainer;
