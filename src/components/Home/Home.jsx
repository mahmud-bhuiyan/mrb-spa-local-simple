import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card card w-100 m-auto text-center">
            <div className="movie-poster w-25 m-auto">
              <img
                className="w-75"
                src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg"
                alt=""
              />
            </div>
            <h3>Movie Name: </h3>
            <p>Details: </p>
            <div className="timeAndRating d-flex justify-content-around">
              <p>Watch Time: </p>
              <p>Ratings: </p>
            </div>
            <button className="btn btn-info">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
