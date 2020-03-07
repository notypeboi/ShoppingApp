import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie.js";

class Home extends Component {
  constructor() {
    super();
  }

  state = {
    movies: [],
    isLoading: true
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({
      movies,
      isLoading: false
    });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div className="select">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text"> Loading... </span>{" "}
          </div>
        ) : (
          <div class="movie_list">
            {movies.map(movie => {
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
