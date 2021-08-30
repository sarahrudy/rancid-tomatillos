import './MovieDetails.css';
import { getSingleMovie } from './apiCalls';
import React, { Component } from 'react';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: '',
    };
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }

    if (!this.state.movie && !this.state.error) {
      return (
        <div className="loading-movie">
          <h1>We are retrieving your movie...</h1>
        </div>
      );
    }

    if (this.state.movie) {
      return (
        <section className="single-movie-container">
          <img
            className="banner-photo"
            src={this.state.movie.backdrop_path}
            alt={`Background banner for ${this.state.movie.title}`}
          ></img>
          <div className="info">
            <img
              className="movie-poster"
              src={this.state.movie.poster_path}
              alt={`Poster for ${this.state.movie.title}`}
            ></img>
          </div>
        </section>
      );
    }
  }
}

export default MovieDetails;
