import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <div className="background-image-container">
        <img src={posterURL} alt={title} className="movie-poster" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}/10</p>
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
};

// Define prop types
// MovieCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   posterURL: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default MovieCard;
