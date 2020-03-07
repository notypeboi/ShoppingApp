import React, { useState } from "react";
import PropTyes from "prop-types";

function Movie({ id, title, year, poster }) {
  return (
    <div className="movie">
      <img className="image_size" src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title"> {title} </h3>
        <h5 className="movie_year"> {year} </h5>
      </div>

      <button>장바구니에 추가 </button>
    </div>
  );
}

Movie.PropTyes = {
  id: PropTyes.number.isRequired,
  title: PropTyes.string.isRequired,
  year: PropTyes.number.isRequired,
  poster: PropTyes.string.isRequired
};

export default Movie;
