import './MovieCard.css';

const MovieCard = ({ img, title, rating, id, handleChange }) => {
  return (
    <article className="movie-card" onClick={() => handleChange(id)} id={id}>
      <img className="movie-poster" src={img} alt="movie poster" />
      <h3>{title}</h3>
      <p>{Math.floor(rating)} out of 10</p>
    </article>
  );
};

export default MovieCard;
