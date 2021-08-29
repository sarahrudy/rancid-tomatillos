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

  componentDidMount = () => {
    getSingleMovie(this.props.id)
      .then((data) => this.setState({ movie: data.movie }))
      .catch((error) =>
        this.setState({ error: 'We are sorry, something went wrong :(' })
      );
  };

  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }

    if (!this.state.movie.title && !this.state.error) {
      return (
        <div className="loading-movie">
          <h1>We are retrieving your movie...</h1>
        </div>
      );
    }

    if (this.state.movie.title) {
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
            <div className="title-container">
              <h3 className="movie-title">{this.state.movie.title}</h3>
              <p className="release">Release Date</p>
              <p className="movie-release">
                {new Date(this.state.movie.release_date).toLocaleDateString()}
              </p>
              <p className="rating">Average rating</p>
              <p className="movie-rating">
                {this.state.movie.average_rating.toFixed(2)}
              </p>
            </div>
            <div className="details-container">
              <p className="overview">Overview</p>
              <p className="movie-overview">{this.state.movie.overview}</p>
              <p className="genres">Genres</p>
              <p className="movie-genres">
                {this.state.movie.genres.join(' | ')}
              </p>
              <p className="budget">Budget</p>
              <p className="movie-budget">
                ${this.state.movie.budget.toLocaleString()}
              </p>
              <p className="revenue">Revenue</p>
              <p className="movie-revenue">
                ${this.state.movie.revenue.toLocaleString()}
              </p>
              <p className="runtime">Runtime</p>
              <p className="movie-runtime">
                {this.state.movie.runtime} minutes
              </p>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default MovieDetails;
