import './MovieDetails.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSingleMovie } from '../apiCalls';

const MovieDetails = ({ id }) => {
  // put single movie details function api call 

  const [currentMovie, setCurrentMovie ] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    getSingleMovie(id)
      .then((movie) => setCurrentMovie(movie.movie))
      .catch((error) => setError(error.message))
  }, [id])

  return (
    <section className="single-movie-container">
      <h1>{currentMovie.title}</h1>
      <img src={currentMovie.poster_path} alt={`Poster for ${currentMovie.title}`}/>
      {/* <p className="movie-info">{release_date}, {genres[1].name}, {runtime}</p>  */}
      <p className="average-rating">{Math.floor(currentMovie.average_rating)}/10</p>
      <p className="tagline">{currentMovie.tagline}</p>
      <p className="overview">{currentMovie.overview}</p>
      <p className="budget"><strong>Budget: {currentMovie.budget}</strong></p>
      <p className="revenue"><strong>Revenue: {currentMovie.revenue}</strong></p>
      <Link to={`/${currentMovie.id}`} className='back-btn'>◀ back</Link>
    </section>
  )
}

// dummy data from API
// { "movie": { 
//   id: 1, 
//   title: "Movie Title", 
//   poster_path: "someURL", 
//   backdrop_path: "someURL", 
//   release_date: "2019-12-04", 
//   overview: "Some overview", 
//   average_rating: 6, 
//   genres: [
//     { id: 18, 
//       name: "Drama" }], 
//   budget: 63000000, 
//   revenue: 100853753, 
//   runtime: 139, 
//   tagline: "Movie Tagline" } }


// const MovieDetails = (props) => {
//   return (
//     <section className="single-movie-container">
//       <img
//         className="banner-photo"
//         src={props.movie.backdrop_path}
//         alt={`Background banner for ${props.movie.title}`}
//       ></img>
//       <div className="info">
//         <img
//           className="movie-poster"
//           src={props.movie.poster_path}
//           alt={`Poster for ${props.movie.title}`}
//         ></img>
//       </div>
//     </section>
//   );
// };

export default MovieDetails;
