import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies.js';
import MovieDetails from '../MovieDetails/MovieDetails';
import Nav from '../Nav/Nav.js';
import Error from '../Error/Error';
import { getMovies, getSingleMovie } from '../apiCalls';
import { Route, Switch, Redirect} from 'react-router-dom';

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

  render() {
    // if (this.state.error) {
    //   return <Error message={this.state.error} />;
    // }

    {this.state.error && <Error message={this.state.error} /> }

    // if (!this.state.movies && !this.state.error) {
    //   return (
    //     <div className="loading-movie">
    //       <h1>We are retrieving your movie...</h1>
    //     </div>
    //   );
    // }

    {!this.state.movies && !this.state.error && 
      <div className="loading-movie">
        <h1>We are retrieving your movie...</h1>
      </div> }

      return (
        <div className="app">
          <Nav />
          <Switch>
          <Route exact path="/" component={() => (
            <Movies movies={this.state.movies} /> )} />
          <Route exact path="/movies/:movie_id" component={({ match }) => {
            const currentMovie = match.params.movie_id 
            return <MovieDetails id={parseInt(currentMovie)} movie={movie_id[currentMovie]} />
          }} />
            
            {/* const { params } = match;
              console.log(match)
            return (
              <MovieDetails id={parseInt(params.movie_id)} movie={match.params} />
            );
          }} /> */}
            {/* return <MovieDetails {...currentMovie} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
      )}
    }

  
  
    //   if (!this.state.error && this.state.isSingleMovie) {
  //     return (
  //       <div className="app">
  //         <Nav />
  //         <MovieDetails movie={this.state.singleMovie} />
  //       </div>
  //     );
  //   }
  


export default App;
