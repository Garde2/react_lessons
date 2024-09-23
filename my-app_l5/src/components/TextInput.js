import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");

  const addText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>{text}</h3>
      <input type="text" onChange={addText}></input>
    </div>
  );
  //   return (
  //     <div>
  //       <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  //       <button onClick={addText}>Add</button>
  //       <span>{text}</span>
  //     </div>
  //   )
};

export default TextInput;
