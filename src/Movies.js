import './Movies.css';
import MovieCard from './MovieCard';
import { getSingleMovie } from './apiCalls';

const Movies = ({ movies, handleChange }) => {
  const movieCard = movies.map((movie) => {
    return (
      <MovieCard
        img={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        key={movie.id}
        onClick={() => handleChange(movie.id)}
      />
    );
  });

  return <div className="movies-container">{movieCard}</div>;
};

export default Movies;
