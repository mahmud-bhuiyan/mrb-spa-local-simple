import React from "react";

const Movie = ({ movie, handleWatchTime }) => {
  return (
    <div className="col-md-4 g-4">
      <div className="movie-card card w-100 m-auto text-center h-100">
        <div className="movie-poster w-25 m-auto">
          <img className="w-75" src={movie.poster} alt="" />
        </div>
        <h3>{movie.movieName}</h3>
        <p>{movie.description}</p>
        <div className="timeAndRating d-flex justify-content-around">
          <p>Watch Time: {movie.watchTime} </p>
          <p>Ratings: {movie.imdbRating} </p>
        </div>
        <button
          onClick={() => {
            handleWatchTime(movie.watchTime);
          }}
          className="btn btn-info"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Movie;
