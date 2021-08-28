import './MovieCard.css';

const MovieCard = ({ img, title, rating }) => {
  return (
    <article className="movie-card">
      <img className="movie-poster" src={img} alt="movie poster" />
      <h3>{title}</h3>
      <p>{rating}</p>
    </article>
  );
};
export default MovieCard;
