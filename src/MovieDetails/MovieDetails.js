import './MovieDetails.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ id, title, poster_path, release_date, overview, average_rating, genres, budget, revenue, runtime, tagline}) => {
  console.log(genres)
  return (
    <section className="single-movie-container">
      <h1>{title}</h1>
      <img src={poster_path} alt={`Poster for ${title}`}/>
      {/* <p className="movie-info">{release_date}, {genres[1].name}, {runtime}</p>  */}
      <p className="average-rating">{Math.floor(average_rating)}/10</p>
      <p className="tagline">{tagline}</p>
      <p className="overview">{overview}</p>
      <p className="budget"><strong>Budget: {budget}</strong></p>
      <p className="revenue"><strong>Revenue: {revenue}</strong></p>
      <Link to={`/${id}`} className='back-btn'>◀ back</Link>
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
