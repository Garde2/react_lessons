import React, { useState } from "react";

function CounterPlusMinus() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Увеличить на один</button>
      <button onClick={decrementCount}>Уменьшить на один</button>
      <span>{count}</span>
    </div>
  );
}

export default CounterPlusMinus;
