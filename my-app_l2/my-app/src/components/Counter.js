import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 2);
  };
  return (
    <div>
      <button onClick={() => setCount((item) => ++item)}>Click +1</button>
      <button onClick={updateCount}>Click +2</button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
