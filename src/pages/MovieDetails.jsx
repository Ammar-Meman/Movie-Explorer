import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const API_KEY = "81025766";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function MovieDetails({ favorites, onToggleFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isFav = favorites ? favorites.includes(id) : false;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found.");
        }
      } catch (err) {
        setError("Failed to fetch movie details. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (error) return <div className="error-message">⚠ {error}</div>;
  if (!movie) return null;

  const posterSrc =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : `https://placehold.co/400x600/1e1e2a/9999b3?text=No+Poster`;

  const genres = movie.Genre && movie.Genre !== "N/A"
    ? movie.Genre.split(", ")
    : [];

  return (
    <div className="movie-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="movie-details-container">
        {/* Poster */}
        <div className="movie-details-poster">
          <img src={posterSrc} alt={movie.Title} />
        </div>

        {/* Info */}
        <div className="movie-details-info">
          <h1>{movie.Title}</h1>

          <div className="movie-meta">
            {movie.Year && movie.Year !== "N/A" && (
              <span className="meta-pill">{movie.Year}</span>
            )}
            {movie.Rated && movie.Rated !== "N/A" && (
              <span className="meta-pill">{movie.Rated}</span>
            )}
            {movie.Runtime && movie.Runtime !== "N/A" && (
              <span className="meta-pill">{movie.Runtime}</span>
            )}
          </div>

          {genres.length > 0 && (
            <div className="movie-genres">
              {genres.map((genre) => (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
          )}

          {movie.imdbRating && movie.imdbRating !== "N/A" && (
            <div className="rating-badge">
              ⭐ {movie.imdbRating} <span className="rating-label">/ 10 IMDb</span>
            </div>
          )}

          {movie.Plot && movie.Plot !== "N/A" && (
            <p className="movie-plot">{movie.Plot}</p>
          )}

          <div className="movie-facts">
            {movie.Director && movie.Director !== "N/A" && (
              <p><strong>Director:</strong> {movie.Director}</p>
            )}
            {movie.Actors && movie.Actors !== "N/A" && (
              <p><strong>Actors:</strong> {movie.Actors}</p>
            )}
            {movie.Released && movie.Released !== "N/A" && (
              <p><strong>Released:</strong> {movie.Released}</p>
            )}
            {movie.Language && movie.Language !== "N/A" && (
              <p><strong>Language:</strong> {movie.Language}</p>
            )}
          </div>

          {/* Add to Favorites Button */}
          {onToggleFavorite && (
            <button
              className={`add-fav-btn ${isFav ? "remove" : "add"}`}
              onClick={() => onToggleFavorite(id)}
            >
              {isFav ? "✕ Remove from Favorites" : "♥ Add to Favorites"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
