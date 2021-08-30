import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
import MovieDetails from './MovieDetails';
import Nav from './Nav.js';
import { getMovies, getSingleMovie } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      isSingleMovie: false,
      error: '',
    };
  }

  componentDidMount() {
    getMovies()
      .then((data) =>
        this.setState({ movies: [...this.state.movies, ...data.movies] })
      )
      .catch((error) =>
        this.setState({ error: 'We are sorry, something went wrong :(' })
      );
  }

  handleChange = (id) => {
    this.setState({ isSingleMovie: true });
    getSingleMovie(id).then((movie) =>
      this.setState({ singleMovie: movie.movie })
    );
  };

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    }

    if (!this.state.movies && !this.state.error) {
      return (
        <div className="loading-movie">
          <h1>We are retrieving your movie...</h1>
        </div>
      );
    }

    if (!this.state.error && !this.state.isSingleMovie) {
      return (
        <div className="app">
          <Nav />
          <Movies movies={this.state.movies} handleChange={this.handleChange} />
        </div>
      );
    }

    if (!this.state.error && this.state.isSingleMovie) {
      return <MovieDetails movie={this.state.singleMovie} />;
    }
  }
}

export default App;
