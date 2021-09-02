import './MovieDetails.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="single-movie-container">
      <h1>{currentMovie.title}</h1>
      <img
        src={currentMovie.poster_path}
        alt={`Poster for ${currentMovie.title}`}
      />
      {/* <p className="movie-info">{release_date}, {genres[1].name}, {runtime}</p>  */}
      <p className="average-rating">
        {Math.floor(currentMovie.average_rating)}/10
      </p>
      <p className="tagline">{currentMovie.tagline}</p>
      <p className="overview">{currentMovie.overview}</p>
      <p className="budget">
        <strong>Budget: {currentMovie.budget}</strong>
      </p>
      <p className="revenue">
        <strong>Revenue: {currentMovie.revenue}</strong>
      </p>
      <Link to={`/`} className="back-btn">
        ◀ back
      </Link>
    </section>
  );
};

export default MovieDetails;
