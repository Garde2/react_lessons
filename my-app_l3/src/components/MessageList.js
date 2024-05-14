import React, { useState } from "react";

export function MessageList() {
  const [messages, setMessages] = useState([
    { id: "id1", text: "message1", heading: "Heading 1" },
    { id: "id2", text: "message2", heading: "Heading 2" },
    { id: "id3", text: "message3", heading: "Heading 3" },
  ]);

  return messages.map((message) => (
    <>
      <h2>{message.heading}</h2>
      <div key={message.id}>{message.text}</div>
    </>
  ));
}

export default MessageList;
