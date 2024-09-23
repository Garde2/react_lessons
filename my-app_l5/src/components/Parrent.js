import React, { useState } from "react";
import Button from "@mui/joy/Button";

function ParrentCounter() {
  const [count, setCount] = useState(0);
  console.log("Parent");

  const upCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Родитель</h2>
      <ChildCount count={count} />
      <Button onClick={upCount} variant="solid">
        Плюс один
      </Button>
    </div>
  );
}

function ChildCount({ count }) {
  console.log("click");
  return (
    <div>
      <p>Счетчик внутри</p>
      <p>Значение счетчика {count}</p>
    </div>
  );
}

export default ParrentCounter;
