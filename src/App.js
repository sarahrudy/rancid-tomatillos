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
    console.log(id);
    this.setState({ isSingleMovie: true });
    getSingleMovie(id);
  };

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
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
      return <MovieDetails />;
    }
  }
}

export default App;
