import React from "react";

const GreetingName = ({ name }) => {
  return (
    <div>
      <h1>Привет, {{ name }}!</h1>
    </div>
  );
};

export default GreetingName;
