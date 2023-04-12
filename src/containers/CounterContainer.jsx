// container
// container
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCount, decCount } from "../redux/actions/counter";
import Counter from "../components/Counter";

function CounterContainer() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state);

  const onIncrease = () => {
    dispatch(incCount()); // dispatch({type:INC_COUNT})
  };

  const onDecrease = () => {
    dispatch(decCount());
  };

  return (
    <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
  );
}

export default CounterContainer;
