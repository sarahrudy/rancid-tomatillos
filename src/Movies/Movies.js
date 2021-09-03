import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom'

const Movies = ({ movies }) => {
  const movieCard = movies.map((movie) => {
    return (
      <Link to={`/movies/${movie.id}`} key={movie.id} >
        <MovieCard
          img={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          key={movie.id}
          id={movie.id}
        />
      </Link>
    );
  });

  return <div className="movies-container">{movieCard}</div>;
};

export default Movies;

