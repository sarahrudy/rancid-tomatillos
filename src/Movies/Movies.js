import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
// import { getSingleMovie } from './apiCalls';
import { NavLink } from 'react-router-dom'

const Movies = ({ movies, handleChange }) => {
  const movieCard = movies.map((movie) => {
    return (
      <NavLink to={`/movies/${movie.id}`}>
      <MovieCard
        img={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        key={movie.id}
        id={movie.id}
        handleChange={handleChange}
      />
      </NavLink>
    );
  });

  return <div className="movies-container">{movieCard}</div>;
};

export default Movies;
