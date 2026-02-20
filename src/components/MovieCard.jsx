import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie, onFavorite, isFavorite }) {
  const { Title, Year, Poster, imdbID } = movie;

  const posterSrc =
    Poster && Poster !== "N/A"
      ? Poster
      : `https://placehold.co/300x450/1e1e2a/9999b3?text=No+Poster`;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterSrc} alt={Title} loading="lazy" />
      </div>
      <div className="movie-info">
        <h3>{Title}</h3>
        <p className="movie-year">{Year}</p>
        <div className="movie-actions">
          <Link to={`/movie/${imdbID}`} className="details-btn">
            View Details
          </Link>
          <button
            className={`favorite-btn ${isFavorite ? "remove" : "add"}`}
            onClick={() => onFavorite(imdbID)}
          >
            {isFavorite ? "✕ Remove" : "♥ Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
