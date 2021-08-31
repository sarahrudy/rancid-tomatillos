import './MovieDetails.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  return (
    <section className="single-movie-container">
      <img
        className="banner-photo"
        src={props.movie.backdrop_path}
        alt={`Background banner for ${props.movie.title}`}
      ></img>
      <div className="info">
        <img
          className="movie-poster"
          src={props.movie.poster_path}
          alt={`Poster for ${props.movie.title}`}
        ></img>
      </div>
    </section>
  );
};

export default MovieDetails;
