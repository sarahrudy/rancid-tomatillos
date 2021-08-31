import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ img, title, rating, id, handleChange }) => {
  return (
    <article className="movie-card" onClick={() => handleChange(id)} id={id}>
      <Link to={`/movies/${id}`}>
        <img className="movie-poster" src={img} alt="movie poster" />
      </Link>

      <h3>{title}</h3>
      <p>{Math.floor(rating)} out of 10</p>
    </article>
  );
};

export default MovieCard;
