import { useState } from "react";
import CurrentTime from "./CurrentTime";

function Show({ data }) {
  const [block, setSlock] = useState(false);

  const blockShow = () => {
    setSlock(!block);
  };

  return (
    <div>
      <button onClick={blockShow}>Показать или скрыть</button>
      <span style={{ display: block ? "block" : "none" }}>
        {data} <CurrentTime />
      </span>
    </div>
  );
}

export default Show;
