import './Movies.css';
import MovieCard from './MovieCard';

const Movies = ({ movies }) => {
  const movieCard = movies.map((movie) => {
    return (
      <MovieCard
        img={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
      />
    );
  });

  return <div className="movies-container">{movieCard}</div>;
};

export default Movies;
