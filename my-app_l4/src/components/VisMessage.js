import { useState } from "react";
import MessageList from "./MessageList";

function VisMessages({ data }) {
  const [block, setSlock] = useState(false);

  const blockShow = () => {
    setSlock(!block);
  };

  return (
    <>
      <button onClick={blockShow}>Тут у нас мессааааги...</button>
      <span style={{ display: block ? "block" : "none" }}>
        <MessageList />
      </span>
    </>
  );
}

export default VisMessages;
