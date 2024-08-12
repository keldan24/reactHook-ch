
const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <div className="background-image-container">
        <img src={posterURL} alt={title} className="movie-poster" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}/10</p>
    </div>
  );
};

export default MovieCard;
