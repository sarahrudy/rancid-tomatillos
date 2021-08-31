import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';

const Movies = ({ movies, handleChange }) => {
  const movieCard = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        img={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        id={movie.id}
        handleChange={handleChange}
      />
    );
  });

  return <div className="movies-container">{movieCard}</div>;
};

export default Movies;
