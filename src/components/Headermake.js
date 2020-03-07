import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Counter from "./Counter";
import store from "../store";

const Headermake = ({ number }) => (
  <div className="Headermake">
    <ul>
      <li>
        <Link to="/"> 제품목록 </Link>
      </li>
      <li>
        <Link to="About">
          장바구니
          <span className="badge">
            <Counter />
          </span>
        </Link>
      </li>
    </ul>
  </div>
);

Headermake.propTypes = {
  number: PropTypes.number
};

export default Headermake;
