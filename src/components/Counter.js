import React from "react";
import PropTypes from "prop-types";

const Counter = ({ number, onIncrement }) => {
  return (
    <div className="Counter" onClick={onIncrement}>
      {number}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number
};
Counter.defaultProps = {
  number: 0
};

export default Counter;
