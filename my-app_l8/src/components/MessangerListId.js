import React from "react";
import PropTypes from "prop-types";

function Message({ text }) {
  return <li>{text}</li>;
}

Message.propTypes = { text: PropTypes.string.isRequired };

function MessageList({ messages }) {
  return (
    <ul>
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </ul>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MessageList;
