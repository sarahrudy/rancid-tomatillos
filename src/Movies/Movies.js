import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

const Movies = ({ movies, handleChange }) => {
  const movieCard = movies.map((movie) => {
    return (
      <Link to={`/movies/${movie.id}`}>
        <MovieCard
          img={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          key={movie.id}
          id={movie.id}
          handleChange={handleChange}
        />
      </Link>
    );
  });

  return <div className="movies-container">{movieCard}</div>;
};

export default Movies;
