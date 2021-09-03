import './MovieDetails.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import { getSingleMovie } from '../apiCalls';

const MovieDetails = ({ id }) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getSingleMovie(id)
      .then((movie) => setCurrentMovie(movie.movie))
      .catch((error) => setError(error.message));
  }, [id]);

  return (
    <section
      className="single-movie-container"
      style={{ backgroundImage: `url(${currentMovie.backdrop_path})` }}
    >
      <div className="movie-details">
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.genres}</p>
        <p>Release Date: {currentMovie.release_date}</p>
        <p className="average-rating">
          {Math.floor(currentMovie.average_rating)}/10
        </p>
        <p className="tagline">{currentMovie.tagline}</p>
        <p className="overview">Overview: {currentMovie.overview}</p>
        <p className="budget">
          <strong>Budget: ${currentMovie.budget}</strong>
        </p>
        <p className="revenue">
          <strong>Revenue: ${currentMovie.revenue}</strong>
        </p>
        <p className="runtime">Runtime: {currentMovie.runtime} Mins</p>
        <Link to={`/`} className="back-btn">
          ◀ back
        </Link>
      </div>
    </section>
  );
};

export default MovieDetails;
