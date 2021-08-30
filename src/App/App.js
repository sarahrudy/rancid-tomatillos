import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies.js';
import MovieDetails from '../MovieDetails/MovieDetails';
import Nav from '../Nav/Nav.js';
import Error from '../Error/Error';
import { getMovies, getSingleMovie } from '../apiCalls';

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
      .catch((error) => this.setState({ error: error.message }));
  }

  handleChange = (id) => {
    this.setState({ isSingleMovie: true });
    getSingleMovie(id)
      .then((movie) => this.setState({ singleMovie: movie.movie }))
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    if (this.state.error) {
      return <Error message={this.state.error} />;
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
      return (
        <div className="app">
          <Nav />
          <MovieDetails movie={this.state.singleMovie} />
        </div>
      );
    }
  }
}

export default App;
