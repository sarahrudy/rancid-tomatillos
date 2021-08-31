import './MovieDetails.css';
import React from 'react';

const MovieDetails = (props) => {
  return (
    <section className="single-movie-container">
      <img
        className="banner-photo"
        src={props.movie.backdrop_path}
        alt={`Background banner for ${props.movie.title}`}
      />
      <div className="info">
        <img
          className="movie-poster"
          src={props.movie.poster_path}
          alt={`Poster for ${props.movie.title}`}
        />
        {props.movie.title === '' && <p>No Title Available</p>}
        <p>{props.movie.title}</p>
        {props.movie.release_date === '' && <p>No Date Available</p>}
        <p>{props.movie.release_date}</p>
        {props.movie.overview === '' && <p>No Date Available</p>}
        <p>{props.movie.overview}</p>
        {props.movie.release_date === '' && <p>No Date Available</p>}
        <p>{props.movie.release_date}</p>
        {props.movie.release_date === '' && <p>No Date Available</p>}
        <p>{props.movie.release_date}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
