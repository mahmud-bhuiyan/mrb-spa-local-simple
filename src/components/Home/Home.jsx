import { Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";

const Home = ({ handleWatchTime }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <div className="movie-container row">
        {movies.map((movie) => (
          <Movie
            key={movie.movieName}
            movie={movie}
            handleWatchTime={handleWatchTime}
          ></Movie>
        ))}
      </div>
    </div>
  );
};

export default Home;
