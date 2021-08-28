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
      error: '',
    };
  }

  componentDidMount = () => {
    getMovies()
    .then(data => this.setState({ movies: [...this.state.movies, ...data.movies] }))
    .catch(error => this.setState({ error: error}))
    
  }

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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
