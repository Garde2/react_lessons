import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={() => setCount((item) => ++item)}>Click +1</button>
      <button onClick={updateCount}>Click +2</button>
      <span>{count}</span>
    </div>
  );
}

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Click +1</button>
//     </div>
//   );
// };

export default Counter;
