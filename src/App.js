import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
// import movieData from './movieData.js';
import Nav from './Nav.js';
import { getMovies } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isSingleMovie: false,
      error: '',
    };
  }

  componentDidMount = () => {
    getMovies()
      .then((data) =>
        this.setState({ movies: [...this.state.movies, ...data.movies] })
      )
      .catch((error) => this.setState({ error: error }));
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
