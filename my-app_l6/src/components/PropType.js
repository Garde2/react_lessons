import React from "react";
import PropTypes from "prop-types";

const Student = ({ name, age, isStudent }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3> {isStudent ? "Студент" : "Не студент"}</h3>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};

export default Student;
